"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.server = void 0;
var Server_1 = __importDefault(require("./src/models/Server"));
exports.server = new Server_1.default();
exports.app = exports.server.getApp();
exports.server.listen();
//# sourceMappingURL=app.js.map