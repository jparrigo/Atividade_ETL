"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const acaoRepository = {
    getAcao: (callback) => {
        const sql = "SELECT * FROM acao";
        database_1.default.all(sql, function (_err, rows) {
            console.log(rows);
            callback(rows);
        });
    },
    addNew: (acao, callback) => {
        console.log(acao);
        const sql = "INSERT INTO acao (sigla, nome, valor_atual) VALUES (?, ?, ?)";
        const params = [acao.sigla, acao.nome, acao.valor_atual];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    updateAcao: (acaoId, acao, callback) => {
        console.log(acao);
        const sql = "UPDATE acao SET sigla = ?, nome = ?, valor_atual = ? WHERE id = ?";
        const params = [acao.sigla, acao.nome, acao.valor_atual, acaoId];
        database_1.default.run(sql, params, function (_err) {
            console.log(this === null || this === void 0 ? void 0 : this.lastID);
            callback(this === null || this === void 0 ? void 0 : this.lastID.toString());
        });
    },
    deleteAcao: (acaoId, callback) => {
        const sql = "DELETE FROM acao WHERE id = ?";
        const params = [acaoId];
        database_1.default.run(sql, params, function (err) {
            if (err) {
                callback(err);
            }
            callback();
        });
    },
};
exports.default = acaoRepository;
