"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const ordemRepository = {
    getOrdem: (callback) => {
        const sql = "SELECT * FROM ordem";
        database_1.default.all(sql, function (_err, rows) {
            callback(rows);
        });
    },
    addOrdem: (ordem, callback) => {
        const sql = "INSERT INTO ordem (cliente, acao, qtde, valor_total, executada) VALUES (?, ?, ?, ?, ?)";
        const params = [ordem.cliente, ordem.acao, ordem.qtde, ordem.valor_total, ordem.executada];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    updateOrdem: (ordemId, ordem, callback) => {
        const sql = "UPDATE ordem SET cliente = ?, acao = ?, data_hora = ?, qtde = ?, valor_total = ?, executada = ? WHERE id = ?";
        const params = [ordem.cliente, ordem.acao, ordem.data_hora, ordem.qtde, ordem.valor_total, ordem.executada, ordemId];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID.toString());
        });
    },
    deleteOrdem: (ordemId, callback) => {
        const sql = "DELETE FROM ordem WHERE id = ?";
        const params = [ordemId];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID.toString());
        });
    }
};
exports.default = ordemRepository;
