const nodemailer = require("nodemailer");

async function createUniversalTransporter() {
  console.log("DEBUG: Carregando EMAIL_USER do .env:", process.env.EMAIL_USER);
  console.log(
    "DEBUG: Carregando EMAIL_PASS (parte inicial) do .env:",
    process.env.EMAIL_PASS
      ? process.env.EMAIL_PASS.substring(0, 10) + "..."
      : "Não carregado"
  );

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("Transporter de e-mail está pronto para enviar (SMTP real)!");
  } catch (error) {
    console.error("Erro ao verificar o Transporter de e-mail:", error.message);

    throw new Error(
      "Falha ao conectar ao servidor de e-mail. Verifique suas credenciais e conexão."
    );
  }

  return transporter;
}

module.exports = createUniversalTransporter;
