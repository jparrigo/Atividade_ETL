import express from 'express';
import Ordem from '../models/Ordem';
import ordemRepository from '../repositories/ordem-repository';

const ordemR = express.Router();

ordemR.get("/ordem", (req, res) => {
  ordemRepository.getOrdem((ordens) => {
    res.status(201).send(ordens)
  })
})

ordemR.post("/ordem",(req, res) => {
  const ordem: Ordem = req.body as Ordem;
  ordemRepository.addOrdem(ordem, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send("Não foi possível publicar esta ordem");
    }
  })
})

ordemR.put("/ordem", (req, res) => {
  const ordem: Ordem = req.body;
  ordemRepository.updateOrdem(ordem.id, ordem, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send("Não foi atualizar deletar esta ordem.");
    }
  })
})

ordemR.DELETE("/ordem", (req, res) => {
  const ordem: Ordem = req.body;
  ordemRepository.deleteOrdem(ordem.id, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send("Não foi possível deletar esta ordem.");
    }
  })
})

export default ordemR;