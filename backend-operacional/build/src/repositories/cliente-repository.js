"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const clienteRepository = {
    getCliente: (callback) => {
        const sql = "SELECT * FROM cliente";
        database_1.default.all(sql, function (_err, rows) {
            console.log(rows);
            callback(rows);
        });
    },
    addNew: (cliente, callback) => {
        console.log(cliente);
        const sql = "INSERT INTO cliente (nome, cpf) VALUES (?, ?)";
        const params = [cliente.nome, cliente.cpf];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    updateCliente: (clienteId, cliente, callback) => {
        console.log(cliente);
        const sql = "UPDATE cliente SET nome = ?, cpf = ? WHERE id = ?";
        const params = [cliente.nome, cliente.cpf, clienteId];
        database_1.default.run(sql, params, function (_err) {
            console.log(this === null || this === void 0 ? void 0 : this.lastID);
            callback(this === null || this === void 0 ? void 0 : this.lastID.toString());
        });
    },
    deleteCliente: (clienteId, callback) => {
        const sql = "DELETE FROM cliente WHERE id = ?";
        const params = [clienteId];
        database_1.default.run(sql, params, function (_err) {
            console.log("Cliente deletado com sucesso!");
            callback(true);
        });
    }
};
exports.default = clienteRepository;
