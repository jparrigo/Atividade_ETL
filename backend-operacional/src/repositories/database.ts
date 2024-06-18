import sqlite3 from "sqlite3";
const DBSOURCE = "db.sqlite";

/***
 * Atenção: não existe tipo boolean no banco SQLite.
 * Apenas devemos representar como inteiro
 * sendo: 0 => false e 1 => true.
 */
const SCRIPT_CLIENTE = `
    CREATE TABLE cliente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        cpf INTEGER
    )`;
const SCRIPT_ORDEM = `
  CREATE TABLE ordem (
    cliente INTEGER,
    acao INTEGER,
    data_hora INTEGER,
    qtde INTEGER,
    valor_total INTEGER,
    executada INTEGER
  )`;
const SCRIPT_ACAO = `
  CREATE TABLE acao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sigla TEXT,
    nome TEXT,
    valor_atual INTEGER
  )`;
const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Database connected.");
    database.run(SCRIPT_CLIENTE, (err) => {
      if (err) {
        console.log("Table cliente already exists.");
      } else {
        console.log("Table cliente created.");
      }
    });
    database.run(SCRIPT_ORDEM, (err) => {
      if (err) {
        console.log("Table ordem already exists.");
      } else {
        console.log("Table ordem created.");
      }
    });
    database.run(SCRIPT_ACAO, (err) => {
      if (err) {
        console.log("Table acao already exists.");
      } else {
        console.log("Table acao created.");
      }
    });
  }
});
export default database;
