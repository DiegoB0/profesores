"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tutoriasGrupales = require("../controllers/tutoriasGrupales");
var _middlewares = require("../middlewares");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Tutorias_Grupales
 *  description: Tutorias Grupales endpoint
 */

/**
 * @swagger
 * /tutorias/grupales:
 *  get:
 *   summary: Obtiene todas las tutorias
 *   tags: [Tutorias_Grupales]
 *
 */
router.get('/tutorias/grupales', _middlewares.verifyToken, _tutoriasGrupales.getTutorias);

/**
 * @swagger
 * /tutorias/grupales/count:
 *  get:
 *   summary: Obtiene el total de las tutorias
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/count', _middlewares.verifyToken, _tutoriasGrupales.getTutoriasCount);

/**
 * @swagger
 * /tutorias/grupales/:id:
 *  get:
 *   summary: Obtiene una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/:id', _middlewares.verifyToken, _tutoriasGrupales.getTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  post:
 *   summary: Agrega una nueva tutoria
 *   tags: [Tutorias_Grupales]
 */
router.post('/tutorias/grupales', _middlewares.verifyToken, _tutoriasGrupales.saveTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  delete:
 *   summary: Elimina una tutoria
 *   tags: [Tutorias_Grupales]
 */
router["delete"]('/tutorias/grupales/:id', _middlewares.verifyToken, _tutoriasGrupales.deleteTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  put:
 *   summary: Actualiza una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.put('/tutorias/grupales/:id', _middlewares.verifyToken, _tutoriasGrupales.updateTutoria);
var _default = router;
exports["default"] = _default;