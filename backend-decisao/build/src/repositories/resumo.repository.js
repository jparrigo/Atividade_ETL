"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const resumoRepository = {
    addNew: (resumo, callback) => {
        console.log(resumo);
        const sql = "INSERT INTO resumo (acao, qtde, liquido) VALUES (?, ?, ?)";
        const params = [resumo.acao, resumo.qtde, resumo.liquido];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    update: (resumoId, resumo, callback) => {
        console.log(resumo);
        const sql = "UPDATE resumo (acao, qtde, liquido) VALUES (?, ?, ?) WHERE id = ?";
        const params = [resumo.acao, resumo.qtde, resumo.liquido, resumoId];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    delete: (resumoId, callback) => {
        console.log(resumoId);
        const sql = "DELETE FROM resumo WHERE id = ?";
        const params = [resumoId];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    get: (callback) => {
        const sql = "SELECT * FROM resumo";
        database_1.default.all(sql, function (_err, rows) {
            console.log(rows);
            callback(rows);
        });
    },
};
exports.default = resumoRepository;
