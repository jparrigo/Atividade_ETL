"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const acao_repository_1 = __importDefault(require("../repositories/acao-repository"));
const acaoRouter = express_1.default.Router();
acaoRouter.get("/acao", (_req, res) => {
    acao_repository_1.default.getAcao((acoes) => {
        res.status(201).send(acoes);
    });
});
acaoRouter.post("/acao", (req, res) => {
    const acao = req.body;
    acao_repository_1.default.addNew(acao, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send();
        }
    });
});
acaoRouter.put("/acao", (req, res) => {
    const acao = req.body;
    console.log(acao.id);
    acao_repository_1.default.updateAcao(acao.id, acao, (id) => {
        if (id) {
            res.status(201).send(`${id}`);
        }
        else {
            res.status(400).send("Deu ruim!");
        }
    });
});
acaoRouter.delete("/acao/:id", (req, res) => {
    const acaoId = +req.params.id;
    acao_repository_1.default.deleteAcao(acaoId, (error) => {
        if (error) {
            res.status(400).send(`${error}`);
        }
        res.status(201).send("Ação foi deletada!");
    });
});
exports.default = acaoRouter;
