"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _profesores = require("../controllers/profesores");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Profesores
 *  description: Profesores endpoint
 */

/**
 * @swagger
 * /profesores:
 *  get:
 *   summary: Obtiene todas los profesores
 *   tags: [Profesores]
 *
 */
router.get('/profesores', _profesores.getProfesores);

/**
 * @swagger
 * /profesores/count:
 *  get:
 *   summary: Obtiene el total de los profesores
 *   tags: [Profesores]
 */
router.get('/profesores/count', _profesores.getProfesoresCount);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/:id', _profesores.getProfesor);

/**
 * @swagger
 * /profesores:
 *  post:
 *   summary: Agrega un nuevo profesor
 *   tags: [Profesores]
 */
router.post('/profesores', _profesores.saveProfesor);

/**
 * @swagger
 * /profesores:
 *  delete:
 *   summary: Elimina un profesor
 *   tags: [Profesores]
 */
router["delete"]('/profesores/:id', _profesores.deleteProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/:id', _profesores.updateProfesor);
var _default = router;
exports["default"] = _default;