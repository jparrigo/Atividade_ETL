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
  }
}

export default resumoRepository;