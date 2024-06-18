import Cliente from "../models/Cliente";
import database from "./database";

const clienteRepository = {
  addNew: (cliente: Cliente, callback: (id?: number) => void) => {
    console.log(cliente);
    const sql = "INSERT INTO cliente (nome, cpf) VALUES (?, ?)";
    const params = [cliente.nome, cliente.cpf];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  }
}

export default clienteRepository;