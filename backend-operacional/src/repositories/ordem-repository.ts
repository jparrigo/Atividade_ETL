import Ordem from "../models/Ordem";
import database from "./database";

const ordemRepository = {
  getOrdem: (callback: (ordens: Array<Ordem>) => void) => {
    const sql = "SELECT * FROM ordem"
    database.all(sql, function (_err: any,rows: any) {
      callback(rows as Array<Ordem>)
    })
  },
  addOrdem: (ordem: Ordem, callback: (id?: number) => void) => {
    const sql = "INSERT INTO ordem (cliente, acao, data_hora, qtde, valor_atual, executada) VALUES (?, ?, ?, ?, ?, ?)";
    const params = [ordem.cliente, ordem.acao, ordem.data_hora, ordem.qtde, ordem.valor_total, ordem.executada];
    database.run(sql, params, function (_err: any) {
      callback(this?.lastID);
    });
  },
  updateOrdem: (ordemId: number | undefined, ordem: Ordem, callback: (id: string) => void) => {
    const sql = "UPDATE ordem SET cliente = ?, acao = ?, data_hora = ?, qtde = ?, valor_total = ?, executada = ? WHERE id = ?";
    const params = [ordem.cliente, ordem.acao, ordem.data_hora, ordem.qtde, ordem.valor_total, ordem.executada, ordemId];
    database.run(sql, params, function (_err: any) {
      callback(this?.lastID.toString());
    })
  },
  deleteOrdem: (ordemId: number | undefined, callback: (id: string) => void) => {
    const sql = "DELETE FROM ordem WHERE id = ?"
    const params = [ordemId]
    database.run(sql,params, function (_err: any) {
      callback(this?.lastID.toString());
    })
  }
}

export default ordemRepository;