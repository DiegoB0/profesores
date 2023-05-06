"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _profesores = require("../controllers/profesores");
var _middlewares = require("../middlewares");
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
router.get('/profesores', _middlewares.verifyToken, _profesores.getProfesores);

/**
 * @swagger
 * /profesores/count:
 *  get:
 *   summary: Obtiene el total de los profesores
 *   tags: [Profesores]
 */
router.get('/profesores/count', _middlewares.verifyToken, _profesores.getProfesoresCount);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/:id', _middlewares.verifyToken, _profesores.getProfesor);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/validate/:id', _profesores.getProfesor);

/**
 * @swagger
 * /profesores:
 *  post:
 *   summary: Agrega un nuevo profesor
 *   tags: [Profesores]
 */
router.post('/profesores', _middlewares.verifyToken, _profesores.saveProfesor);

/**
 * @swagger
 * /profesores/login:
 *  post:
 *   summary: Autentica al usuario
 *   tags: [Profesores]
 */
router.post('/profesores/login', _profesores.authProfesores);

/**
 * @swagger
 * /profesores:
 *  delete:
 *   summary: Elimina un profesor
 *   tags: [Profesores]
 */
router["delete"]('/profesores/:id', _middlewares.verifyToken, _profesores.deleteProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/:id', _middlewares.verifyToken, _profesores.updateProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza la foto del perfil de un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/profile/:id', _middlewares.verifyToken, _profesores.editProfile);
var _default = router;
exports["default"] = _default;