import express from "express";
import cors from "cors";
import clienteR from "./routers/cliente-router";
import acaoRouter from "./routers/acao.routes";
import ordemRouter from "./routers/ordem.routes";

const PORT = 4000;
const HOSTNAME = "http://localhost";

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api", clienteR, acaoRouter, ordemRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running: ${HOSTNAME}:${PORT}`);
});