"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordem_repository_1 = __importDefault(require("../repositories/ordem-repository"));
const ordemR = express_1.default.Router();
ordemR.get("/ordem", (req, res) => {
    ordem_repository_1.default.getOrdem((ordens) => {
        res.status(201).send(ordens);
    });
});
ordemR.post("/ordem", (req, res) => {
    const ordem = req.body;
    ordem_repository_1.default.addOrdem(ordem, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send("Não foi possível publicar esta ordem");
        }
    });
});
ordemR.put("/ordem", (req, res) => {
    const ordem = req.body;
    ordem_repository_1.default.updateOrdem(ordem.id, ordem, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send("Não foi atualizar deletar esta ordem.");
        }
    });
});
ordemR.delete("/ordem", (req, res) => {
    const ordem = req.body;
    ordem_repository_1.default.deleteOrdem(ordem.id, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send("Não foi possível deletar esta ordem.");
        }
    });
});
exports.default = ordemR;
