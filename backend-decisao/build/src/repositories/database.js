"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const DBSOURCE = "db.sqlite";
/***
 * Atenção: não existe tipo boolean no banco SQLite.
 * Apenas devemos representar como inteiro
 * sendo: 0 => false e 1 => true.
 */
const DDL_SCRIPT = `
    CREATE TABLE resumo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data DATETIME DEFAULT CURRENT_TIMESTAMP,
        acao INTEGER,
        qtde INTEGER,
        liquido INTEGER
    )`;
const database = new sqlite3_1.default.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log("Database connected.");
        database.run(DDL_SCRIPT, (err) => {
            if (err) {
                console.log("Table items already exists.");
            }
            else {
                console.log("Table items created.");
            }
        });
    }
});
exports.default = database;
