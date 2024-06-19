"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_repository_1 = __importDefault(require("../repositories/cliente-repository"));
const clienteR = express_1.default.Router();
clienteR.get("/cliente", (req, res) => {
    cliente_repository_1.default.getCliente((clientes) => {
        res.status(201).send(clientes);
    });
});
clienteR.post("/cliente", (req, res) => {
    const cliente = req.body;
    cliente_repository_1.default.addNew(cliente, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send();
        }
    });
});
clienteR.put("/cliente", (req, res) => {
    const cliente = req.body;
    console.log(cliente.id);
    cliente_repository_1.default.updateCliente(cliente.id, cliente, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send("Deu ruim!");
        }
    });
});
clienteR.delete("/cliente", (req, res) => {
    const clienteId = req.body.id;
    cliente_repository_1.default.deleteCliente(clienteId, (value) => {
        if (value) {
            res.status(201).send("Cliente Deletado com Sucesso!");
        }
        else {
            res.status(400).send("Algo deu errado.");
        }
    });
});
exports.default = clienteR;
