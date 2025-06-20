const db = require("../database/db");

exports.getMyData = async (req, res) => {
  try {
    const userId = req.userId;

    // =====> CORREÇÃO AQUI <=====
    // Adicionámos a coluna 'role' à consulta SQL
    const { rows } = await db.query(
      "SELECT id, nome, email, role, data_criacao FROM usuarios WHERE id = $1",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Utilizador não encontrado." });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Erro ao buscar dados do utilizador:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
};
