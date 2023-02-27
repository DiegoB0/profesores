import { Router } from 'express';
import {
	deleteTutoria,
	getTutoria,
	getTutorias,
	getTutoriasCount,
	saveTutoria,
	updateTutoria,
} from '../controllers/tutoriasGrupales';

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
router.get('/tutorias/grupales', getTutorias);

/**
 * @swagger
 * /tutorias/grupales/count:
 *  get:
 *   summary: Obtiene el total de las tutorias
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/count', getTutoriasCount);

/**
 * @swagger
 * /tutorias/grupales/:id:
 *  get:
 *   summary: Obtiene una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.get('/tutorias/grupales/:id', getTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  post:
 *   summary: Agrega una nueva tutoria
 *   tags: [Tutorias_Grupales]
 */
router.post('/tutorias/grupales', saveTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  delete:
 *   summary: Elimina una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.delete('/tutorias/grupales/:id', deleteTutoria);

/**
 * @swagger
 * /tutorias/grupales:
 *  put:
 *   summary: Actualiza una tutoria
 *   tags: [Tutorias_Grupales]
 */
router.put('/tutorias/grupales/:id', updateTutoria);

export default router;
