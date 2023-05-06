import { Router } from 'express';
import {
	authProfesores,
	deleteProfesor,
	editProfile,
	getProfesor,
	getProfesores,
	getProfesoresCount,
	saveProfesor,
	updateProfesor,
} from '../controllers/profesores';

import { verifyToken } from '../middlewares';

const router = Router();

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
router.get('/profesores', verifyToken, getProfesores);

/**
 * @swagger
 * /profesores:
 *  get:
 *   summary: Obtiene todas los profesores
 *   tags: [Profesores]
 *
 */
router.get('/erick', getProfesores);

/**
 * @swagger
 * /profesores/count:
 *  get:
 *   summary: Obtiene el total de los profesores
 *   tags: [Profesores]
 */
router.get('/profesores/count', verifyToken, getProfesoresCount);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/:id', verifyToken, getProfesor);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/validate/:id', getProfesor);

/**
 * @swagger
 * /profesores:
 *  post:
 *   summary: Agrega un nuevo profesor
 *   tags: [Profesores]
 */
router.post('/profesores', verifyToken, saveProfesor);

/**
 * @swagger
 * /profesores/login:
 *  post:
 *   summary: Autentica al usuario
 *   tags: [Profesores]
 */
router.post('/profesores/login', authProfesores);

/**
 * @swagger
 * /profesores:
 *  delete:
 *   summary: Elimina un profesor
 *   tags: [Profesores]
 */
router.delete('/profesores/:id', verifyToken, deleteProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/:id', verifyToken, updateProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza la foto del perfil de un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/profile/:id', editProfile);

export default router;
