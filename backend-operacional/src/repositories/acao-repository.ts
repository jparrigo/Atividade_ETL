import Acao from "../models/Acao";
import database from "./database";

const acaoRepository = {
  getAcao: (callback: (acoes: Array<Acao>) => void) => {
    const sql = "SELECT * FROM acao";
    database.all(sql, function (_err, rows) {
      console.log(rows);
      callback(rows as Array<Acao>);
    });
  },
  addNew: (acao: Acao, callback: (id?: number) => void) => {
    console.log(acao);
    const sql = "INSERT INTO acao (sigla, nome, valor_atual) VALUES (?, ?, ?)";
    const params = [acao.sigla, acao.nome, acao.valor_atual];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  updateAcao: (
    acaoId: number | undefined,
    acao: Acao,
    callback: (id: string) => void
  ) => {
    console.log(acao);
    const sql =
      "UPDATE acao SET sigla = ?, nome = ?, valor_atual = ? WHERE id = ?";
    const params = [acao.sigla, acao.nome, acao.valor_atual, acaoId];
    database.run(sql, params, function (_err) {
      console.log(this?.lastID);
      callback(this?.lastID.toString());
    });
  },
  deleteAcao: (acaoId: number, callback: (error?: Error) => void) => {
    const sql = "DELETE FROM acao WHERE id = ?";
    const params = [acaoId];
    database.run(sql, params, function (err) {
      if (err) {
        callback(err);
      }
      callback();
    });
  },
};

export default acaoRepository;
