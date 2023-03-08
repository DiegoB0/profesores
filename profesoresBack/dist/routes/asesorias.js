"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _asesorias = require("../controllers/asesorias");
var _middlewares = require("../middlewares");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Asesorias
 *  description: Asesorias endpoint
 */

/**
 * @swagger
 * /asesorias:
 *  get:
 *   summary: Obtiene todas las asesorias
 *   tags: [Asesorias]
 *
 */
router.get('/asesorias', _middlewares.verifyToken, _asesorias.getAsesorias);

/**
 * @swagger
 * /asesorias/count:
 *  get:
 *   summary: Obtiene el total de asesorias
 *   tags: [Asesorias]
 */
router.get('/asesorias/count', _middlewares.verifyToken, _asesorias.getAsesoriasCount);

/**
 * @swagger
 * /asesorias/:id:
 *  get:
 *   summary: Obtiene una asesoria
 *   tags: [Asesorias]
 */
router.get('/asesorias/:id', _middlewares.verifyToken, _asesorias.getAsesoria);

/**
 * @swagger
 * /asesorias:
 *  post:
 *   summary: Agrega una nueva asesoria
 *   tags: [Asesorias]
 */
router.post('/asesorias', _middlewares.verifyToken, _asesorias.saveAsesoria);

/**
 * @swagger
 * /asesorias:
 *  delete:
 *   summary: Elimina una asesoria
 *   tags: [Asesorias]
 */
router["delete"]('/asesorias/:id', _middlewares.verifyToken, _asesorias.deleteAsesoria);

/**
 * @swagger
 * /asesorias:
 *  put:
 *   summary: Actualiza una asesoria
 *   tags: [Asesorias]
 */
router.put('/asesorias/:id', _middlewares.verifyToken, _asesorias.updateAsesoria);
var _default = router;
exports["default"] = _default;