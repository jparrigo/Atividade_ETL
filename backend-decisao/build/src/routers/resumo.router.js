"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resumo_repository_1 = __importDefault(require("../repositories/resumo.repository"));
const clienteR = express_1.default.Router();
clienteR.post("/resumo", (req, res) => {
    const resumo = req.body;
    resumo_repository_1.default.addNew(resumo, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send();
        }
    });
});
clienteR.put("/resumo", (req, res) => {
    const resumo = req.body;
    resumo_repository_1.default.update(resumo.id, resumo, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send();
        }
    });
});
clienteR.put("/resumo", (req, res) => {
    const resumo = req.body;
    resumo_repository_1.default.delete(resumo.id, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send();
        }
    });
});
clienteR.get("/resumo", (req, res) => {
    resumo_repository_1.default.get((resumos) => {
        if (resumos) {
            res.status(201).send(resumos);
        }
        else {
            res.status(400).send();
        }
    });
});
exports.default = clienteR;
