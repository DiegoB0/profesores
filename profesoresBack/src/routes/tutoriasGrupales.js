import { Router } from 'express';
import {
	deleteTutoria,
	getTutoria,
	getTutorias,
	getTutoriasCount,
	saveTutoria,
	updateTutoria,
} from '../controllers/tutoriasGrupales';
import { verifyToken } from '../middlewares';

const router = Router();

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
router.get('/tutorias/grupales', verifyToken, getTutorias);

/**
 * @swagger
 * /tutorias/grupales/count:
 *  get:
 *   summary: Obtiene el total de las tutorias
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/count', verifyToken, getTutoriasCount);

/**
 * @swagger
 * /tutorias/grupales/:id:
 *  get:
 *   summary: Obtiene una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/:id', verifyToken, getTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  post:
 *   summary: Agrega una nueva tutoria
 *   tags: [Tutorias_Grupales]
 */
router.post('/tutorias/grupales', verifyToken, saveTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  delete:
 *   summary: Elimina una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.delete('/tutorias/grupales/:id', verifyToken, deleteTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  put:
 *   summary: Actualiza una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.put('/tutorias/grupales/:id', verifyToken, updateTutoria);

export default router;
