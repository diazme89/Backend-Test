"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var geolocation_1 = __importDefault(require("../routes/geolocation"));
// Configurar dot.env
dotenv_1.default.config();
var Server = /** @class */ (function () {
    function Server() {
        // Crear una aplicacion de express
        this.app = express_1.default();
        this.geolocalizacionPath = '/v1';
        this.port = process.env.PORT || '8000';
        //Middlewares
        this.middlewares();
        //Rutas de nuestra aplicacion
        this.routes();
    }
    Server.prototype.routes = function () {
        //Rutas de nuestra aplicacion
        this.app.use(this.geolocalizacionPath, geolocation_1.default);
    };
    Server.prototype.middlewares = function () {
        // CORS
        this.app.use(cors_1.default());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
        //Directorios Publicos
        this.app.use(express_1.default.static('public'));
    };
    //Metodo para inicializar nuestro servidor
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Se inicializo el servidor en el puerto', _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=Server.js.map