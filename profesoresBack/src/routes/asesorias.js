import { Router } from 'express';
import {
	deleteAsesoria,
	getAsesoria,
	getAsesorias,
	getAsesoriasCount,
	saveAsesoria,
	updateAsesoria,
} from '../controllers/asesorias';
import { verifyToken } from '../middlewares';

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
router.get('/asesorias', verifyToken, getAsesorias);

/**
 * @swagger
 * /asesorias/count:
 *  get:
 *   summary: Obtiene el total de asesorias
 *   tags: [Asesorias]
 */
router.get('/asesorias/count', verifyToken, getAsesoriasCount);

/**
 * @swagger
 * /asesorias/:id:
 *  get:
 *   summary: Obtiene una asesoria
 *   tags: [Asesorias]
 */
router.get('/asesorias/:id', verifyToken, getAsesoria);

/**
 * @swagger
 * /asesorias:
 *  post:
 *   summary: Agrega una nueva asesoria
 *   tags: [Asesorias]
 */
router.post('/asesorias', verifyToken, saveAsesoria);

/**
 * @swagger
 * /asesorias:
 *  delete:
 *   summary: Elimina una asesoria
 *   tags: [Asesorias]
 */
router.delete('/asesorias/:id', verifyToken, deleteAsesoria);

/**
 * @swagger
 * /asesorias:
 *  put:
 *   summary: Actualiza una asesoria
 *   tags: [Asesorias]
 */
router.put('/asesorias/:id', verifyToken, updateAsesoria);

export default router;
