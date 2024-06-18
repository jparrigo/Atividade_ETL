import express from "express";
import cors from "cors";
import clienteR from "./routers/cliente-router";

const PORT = 4000;
const HOSTNAME = "http://localhost";

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api", clienteR);

// Start server
app.listen(PORT, () => {
  console.log(`Server running: ${HOSTNAME}:${PORT}`);
});