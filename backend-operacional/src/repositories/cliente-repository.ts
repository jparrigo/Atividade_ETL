import Cliente from "../models/Cliente";
import database from "./database";

const clienteRepository = {
  getCliente: (callback: (clientes: Array<Cliente>) => void) => {
    const sql = "SELECT * FROM cliente"
    database.all(sql, function (_err,rows) {
      console.log(rows);
      callback(rows as Array<Cliente>)
    })
  },
  addNew: (cliente: Cliente, callback: (id?: number) => void) => {
    console.log(cliente);
    const sql = "INSERT INTO cliente (nome, cpf) VALUES (?, ?)";
    const params = [cliente.nome, cliente.cpf];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  updateCliente: (clienteId: number | undefined, cliente: Cliente, callback: (id: string) => void) => {
    console.log(cliente);
    const sql = "UPDATE cliente SET nome = ?, cpf = ? WHERE id = ?"
    const params = [cliente.nome,cliente.cpf,clienteId]
    database.run(sql, params, function (_err) {
      console.log(this?.lastID);
      callback(this?.lastID.toString());
    })
  },
  deleteCliente: (clienteId: number) => {
    const sql = "DELETE FROM cliente WHERE id = ?"
    const params = [clienteId]
    database.run(sql,params, function (_err) {
      console.log("Cliente deletado com sucesso!");
    })
  }
}

export default clienteRepository;