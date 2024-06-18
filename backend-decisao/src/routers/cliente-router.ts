import express from 'express';
import Cliente from '../models/Cliente';
import clienteRepository from '../repositories/cliente-repository';

const clienteR = express.Router();

clienteR.post("/cliente",(req, res) => {
  const cliente: Cliente = req.body as Cliente;
  clienteRepository.addNew(cliente, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send();
    }
  })
})

export default clienteR;