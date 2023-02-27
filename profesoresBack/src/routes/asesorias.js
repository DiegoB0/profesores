import { Router } from 'express';
import {
	deleteAsesoria,
	getAsesoria,
	getAsesorias,
	getAsesoriasCount,
	getAsesporias,
	saveAsesoria,
	updateAsesoria,
} from '../controllers/asesorias';

const router = Router();

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
router.get('/asesorias', getAsesorias);

/**
 * @swagger
 * /asesorias/count:
 *  get:
 *   summary: Obtiene el total de asesorias
 *   tags: [Asesorias]
 */
router.get('/asesorias/count', getAsesoriasCount);

/**
 * @swagger
 * /asesorias/:id:
 *  get:
 *   summary: Obtiene una asesoria
 *   tags: [Asesorias]
 */
router.get('/asesorias/:id', getAsesoria);

/**
 * @swagger
 * /asesorias:
 *  post:
 *   summary: Agrega una nueva asesoria
 *   tags: [Asesorias]
 */
router.post('/asesorias', saveAsesoria);

/**
 * @swagger
 * /asesorias:
 *  delete:
 *   summary: Elimina una asesoria
 *   tags: [Asesorias]
 */
router.delete('/asesorias/:id', deleteAsesoria);

/**
 * @swagger
 * /asesorias:
 *  put:
 *   summary: Actualiza una asesoria
 *   tags: [Asesorias]
 */
router.put('/asesorias/:id', updateAsesoria);

export default router;
