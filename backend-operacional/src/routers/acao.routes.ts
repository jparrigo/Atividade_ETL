import express from "express";
import Acao from "../models/Acao";
import acaoRepository from "../repositories/acao-repository";

const acaoRouter = express.Router();

acaoRouter.get("/", (_req, res) => {
  acaoRepository.getAcao((acoes) => {
    res.status(201).send(acoes);
  });
});

acaoRouter.post("/", (req, res) => {
  const acao: Acao = req.body as Acao;
  acaoRepository.addNew(acao, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send();
    }
  });
});

acaoRouter.put("/", (req, res) => {
  const acao: Acao = req.body as Acao;
  console.log(acao.id);
  acaoRepository.updateAcao(acao.id, acao, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send("Deu ruim!");
    }
  });
});

acaoRouter.delete("/:id", (req, res) => {
  const acaoId: number = +req.params.id;
  acaoRepository.deleteAcao(acaoId, (error) => {
    if (error) {
      res.status(400).send(`${error}`);
    }
    res.status(201).send("Ação foi deletada!");
  });
});

export default acaoRouter;
