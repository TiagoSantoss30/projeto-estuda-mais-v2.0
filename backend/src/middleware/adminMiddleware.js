// no arquivo: backend/src/middleware/adminMiddleware.js

const db = require('../database/db');

async function adminMiddleware(req, res, next) {
  try {
    // Assumimos que o `authMiddleware` já rodou e adicionou `req.userId`
    const userId = req.userId;

    const { rows } = await db.query('SELECT role FROM usuarios WHERE id = $1', [userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const userRole = rows[0].role;

    // Se o cargo não for 'admin', bloqueia o acesso
    if (userRole !== 'admin') {
      return res.status(403).json({ message: 'Acesso negado. Requer privilégios de administrador.' });
    }

    // Se for admin, pode prosseguir
    next();

  } catch (error) {
    console.error("Erro no middleware de admin:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
}

module.exports = adminMiddleware;