"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _asesorias = _interopRequireDefault(require("./routes/asesorias"));
var _profesores = _interopRequireDefault(require("./routes/profesores"));
var _tutoriasGrupales = _interopRequireDefault(require("./routes/tutoriasGrupales"));
var _tutoriasIndividuales = _interopRequireDefault(require("./routes/tutoriasIndividuales"));
var _swaggerOptions = require("./swaggerOptions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Archivos

// const bcrypt = require('bcrypt');
// const fileUpload = require('express-fileupload');

// const saltRounds = 10;
// const myPlainTextPassword = 's0//P4$$w0rD';

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);

//Inicializar express
var app = (0, _express["default"])();

//Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
// app.use(fileUpload());

//////////////////////////////// RUTAS DE LA API ///////////////////////////////////////////////
app.use(_profesores["default"]);
app.use(_asesorias["default"]);
app.use(_tutoriasGrupales["default"]);
app.use(_tutoriasIndividuales["default"]);

//Documentacion
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;