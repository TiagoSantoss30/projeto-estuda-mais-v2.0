const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const router = express.Router();

// Rota de Cadastro: POST /auth/register

router.post(
  "/register",
  [
    body("nome").isString().notEmpty().withMessage("O nome é obrigatório."),
    body("email").isEmail().withMessage("Forneça um e-mail válido."),
    body("senha")
      .isLength({ min: 6 })
      .withMessage("A senha deve ter no mínimo 6 caracteres."),
  ],
  authController.register
);

// Rota de Login : POST /login

router.post(
  "/login",
  [
    (body("email").isEmail().withMessage("Forneça um e-mail válido."),
    body("senha").notEmpty().withMessage("A senha é obrigatória")),
  ],
  authController.login
);

module.exports = router;
