const db = require("../database/db");

exports.getAllUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT id, nome, email, role, data_criacao FROM usuarios ORDER BY data_criacao DESC"
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao buscar todos os usuários:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
};
