import express from 'express';
import Cliente from '../models/Cliente';
import clienteRepository from '../repositories/cliente-repository';

const clienteR = express.Router();

clienteR.get("/cliente", (req, res) => {
  clienteRepository.getCliente((clientes) => {
    res.status(201).send(clientes)
  })
})

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

clienteR.put("/cliente", (req, res) => {
  const cliente: Cliente = req.body;
  console.log(cliente.id);
  clienteRepository.updateCliente(cliente.id, cliente, (id) => {
    if (id) {
      res.status(201).send(`${id}`);
    } else {
      res.status(400).send("Deu ruim!");
    }
  })
})

clienteR.delete("/cliente", (req, res) => {
  const clienteId: number  = req.body.id;
  clienteRepository.deleteCliente(clienteId, (value) => {
    if (value) {
      res.status(201).send("Cliente Deletado com Sucesso!")
    } else {
      res.status(400).send("Algo deu errado.")
    }
  })
})

export default clienteR;