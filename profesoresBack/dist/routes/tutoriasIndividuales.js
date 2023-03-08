"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tutoriasIndividuales = require("../controllers/tutoriasIndividuales");
var _middlewares = require("../middlewares");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Tutorias_Individuales
 *  description: Tutorias individuales endpoint
 */

/**
 * @swagger
 * /tutorias/individuales:
 *  get:
 *   summary: Obtiene todas las tutorias
 *   tags: [Tutorias_Individuales]
 *
 */
router.get('/tutorias/individuales', _middlewares.verifyToken, _tutoriasIndividuales.getTutorias);

/**
 * @swagger
 * /tutorias/individuales/count:
 *  get:
 *   summary: Obtiene el total de las tutorias
 *   tags: [Tutorias_Individuales]
 */
router.get('/tutorias/individuales/count', _middlewares.verifyToken, _tutoriasIndividuales.getTutoriasCount);

/**
 * @swagger
 * /tutorias/individuales/:id:
 *  get:
 *   summary: Obtiene una tutoria
 *   tags: [Tutorias_Individuales]
 */
router.get('/tutorias/individuales/:id', _middlewares.verifyToken, _tutoriasIndividuales.getTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  post:
 *   summary: Agrega una nueva tutoria
 *   tags: [Tutorias_Individuales]
 */
router.post('/tutorias/individuales', _middlewares.verifyToken, _tutoriasIndividuales.saveTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  delete:
 *   summary: Elimina una tutoria
 *   tags: [Tutorias_Individuales]
 */
router["delete"]('/tutorias/individuales/:id', _middlewares.verifyToken, _tutoriasIndividuales.deleteTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  put:
 *   summary: Actualiza una tutoria
 *   tags: [Tutorias_Individuales]
 */
router.put('/tutorias/individuales/:id', _middlewares.verifyToken, _tutoriasIndividuales.updateTutoria);
var _default = router;
exports["default"] = _default;