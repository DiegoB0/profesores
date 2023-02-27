import { Router } from 'express';
import {
	deleteProfesor,
	getProfesor,
	getProfesores,
	getProfesoresCount,
	saveProfesor,
	updateProfesor,
} from '../controllers/profesores';

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
router.get('/profesores', getProfesores);

/**
 * @swagger
 * /profesores/count:
 *  get:
 *   summary: Obtiene el total de los profesores
 *   tags: [Profesores]
 */
router.get('/profesores/count', getProfesoresCount);

/**
 * @swagger
 * /profesores/:id:
 *  get:
 *   summary: Obtiene un profesor
 *   tags: [Profesores]
 */
router.get('/profesores/:id', getProfesor);

/**
 * @swagger
 * /profesores:
 *  post:
 *   summary: Agrega un nuevo profesor
 *   tags: [Profesores]
 */
router.post('/profesores', saveProfesor);

/**
 * @swagger
 * /profesores:
 *  delete:
 *   summary: Elimina un profesor
 *   tags: [Profesores]
 */
router.delete('/profesores/:id', deleteProfesor);

/**
 * @swagger
 * /profesores:
 *  put:
 *   summary: Actualiza un profesor
 *   tags: [Profesores]
 */
router.put('/profesores/:id', updateProfesor);

export default router;
