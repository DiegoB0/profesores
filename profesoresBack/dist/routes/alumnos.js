"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _alumnos = require("../controllers/alumnos");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Alumnos
 *  description: Alumnos endpoint
 */

/**
 * @swagger
 * /alumnos:
 *  get:
 *   summary: Obtiene todos los alumnos
 *   tags: [Alumnos]
 *
 */
router.get('/alumnos', _alumnos.getAlumnos);
var _default = router;
exports["default"] = _default;