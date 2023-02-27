"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
//Configuraciones de swagger
var options = {
  definition: {
    info: {
      title: 'Documentacion de las APIs'
    }
  },
  apis: ['./src/routes/**/*.js']
};
exports.options = options;