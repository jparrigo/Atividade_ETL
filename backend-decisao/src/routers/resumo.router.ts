import express from 'express';
import Resumo from '../models/Resumo';
import resumoRepository from '../repositories/resumo.repository';

const clienteR = express.Router();

clienteR.post("/resumo",(req, res) => {
  const resumo: Resumo = req.body as Resumo;
  resumoRepository.addNew(resumo, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send();
    }
  })
})

clienteR.put("/resumo",(req, res) => {
  const resumo: Resumo = req.body;
  resumoRepository.update(resumo.id,resumo, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send();
    }
  })
})

clienteR.put("/resumo",(req, res) => {
  const resumo: Resumo = req.body;
  resumoRepository.delete(resumo.id, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send();
    }
  })
})

clienteR.get("/resumo",(req, res) => {
  resumoRepository.get((resumos) => {
    if (resumos) {
      res.status(201).send(resumos);
    } else {
      res.status(400).send();
    }
  })
})

export default clienteR;