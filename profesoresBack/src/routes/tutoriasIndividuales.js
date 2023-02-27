import { Router } from 'express';
import {
	deleteTutoria,
	getTutoria,
	getTutorias,
	getTutoriasCount,
	saveTutoria,
	updateTutoria,
} from '../controllers/tutoriasIndividuales';

const router = Router();

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
router.get('/tutorias/individuales', getTutorias);

/**
 * @swagger
 * /tutorias/individuales/count:
 *  get:
 *   summary: Obtiene el total de las tutorias
 *   tags: [Tutorias_Individuales]
 */
router.get('/tutorias/individuales/count', getTutoriasCount);

/**
 * @swagger
 * /tutorias/individuales/:id:
 *  get:
 *   summary: Obtiene una tutoria
 *   tags: [Tutorias_Individuales]
 */
router.get('/tutorias/individuales/:id', getTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  post:
 *   summary: Agrega una nueva tutoria
 *   tags: [Tutorias_Individuales]
 */
router.post('/tutorias/individuales', saveTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  delete:
 *   summary: Elimina una tutoria
 *   tags: [Tutorias_Individuales]
 */
router.delete('/tutorias/individuales/:id', deleteTutoria);

/**
 * @swagger
 * /tutorias/individuales:
 *  put:
 *   summary: Actualiza una tutoria
 *   tags: [Tutorias_Individuales]
 */
router.put('/tutorias/individuales/:id', updateTutoria);

export default router;
