"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const resumo_router_1 = __importDefault(require("./routers/resumo.router"));
const PORT = 4001;
const HOSTNAME = "http://localhost";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", resumo_router_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server running: ${HOSTNAME}:${PORT}`);
});
