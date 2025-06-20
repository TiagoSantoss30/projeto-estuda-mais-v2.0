require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/student", studentRoutes);

app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend escutando na porta ${PORT}`);
});
