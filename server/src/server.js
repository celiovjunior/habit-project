"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const app = (0, fastify_1.default)();
app.register(cors_1.default);
app.register(routes_1.appRoutes);
// port
app.listen({
    port: 3333
}).then(() => {
    console.log('http server is running');
});