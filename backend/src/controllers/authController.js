const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nome, email, senha } = req.body;
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    const userExists = await client.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );
    if (userExists.rows.length > 0) {
      await client.query("ROLLBACK");
      return res.status(409).json({ message: "E-mail já cadastrado." });
    }

    const hashedSenha = await bcrypt.hash(senha, 10);
    const userId = uuidv4();

    const newUserResult = await client.query(
      "INSERT INTO usuarios (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING id",
      [userId, nome, email, hashedSenha]
    );

    await client.query("COMMIT");

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      user: { id: newUserResult.rows[0].id, email, nome },
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Erro na transação de registro:", error);
    res
      .status(500)
      .json({ message: "Erro no servidor ao tentar cadastrar o usuário." });
  } finally {
    client.release();
  }
};

// Função Login
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, senha } = req.body;

  try {
    // 1. Verificar se usuário existe
    const user = await db.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);

    if (user.rows.lenght === 0) {
      return res.status(401).json({ message: "Credenciais inválidas." }); // Usuário não encontrado
    }

    const foundUser = user.rows[0];

    // 2. Comparar senha fornecida com senha armazenada (hash)
    const isMatch = await bcrypt.compare(senha, foundUser.senha);

    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas." });
    }

    // 3. Gerar o token JWT
    const token = jwt.sign(
      { id: foundUser.id, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expira em 1 hora.
    );

    res.status(200).json({ message: "Login bem-sucedido!", token: token });
  } catch (error) {
    console.error(error);
    {
      res.status(500).json({
        message: "Erro no servidor ao tentar fazer login.",
        error: error.message,
      });
    }
  }
};
