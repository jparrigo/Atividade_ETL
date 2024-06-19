import Resumo from "../models/Resumo";
import database from "./database";

const resumoRepository = {
  addNew: (resumo: Resumo, callback: (id?: number) => void) => {
    console.log(resumo);
    const sql = "INSERT INTO resumo (acao, qtde, liquido) VALUES (?, ?, ?)";
    const params = [resumo.acao, resumo.qtde, resumo.liquido];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  update: (resumoId: number | undefined, resumo: Resumo, callback: (id?: number) => void) => {
    console.log(resumo);
    const sql = "UPDATE resumo (acao, qtde, liquido) VALUES (?, ?, ?) WHERE id = ?";
    const params = [resumo.acao, resumo.qtde, resumo.liquido,resumoId];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  delete: (resumoId: number | undefined, callback: (id?: number) => void) => {
    console.log(resumoId);
    const sql = "DELETE FROM resumo WHERE id = ?";
    const params = [resumoId];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  get: (callback: (clientes: Array<Resumo>) => void) => {
    const sql = "SELECT * FROM resumo"
    database.all(sql, function (_err,rows) {
      console.log(rows);
      callback(rows as Array<Resumo>)
    })
  },
}

export default resumoRepository;