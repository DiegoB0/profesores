import { Router } from 'express';
import { getAlumnos } from '../controllers/alumnos';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Alumnos
 *  description: Alumnos endpoint
 */

/**
 * @swagger
 * /alumnos:
 *  get:
 *   summary: Obtiene todos los alumnos
 *   tags: [Alumnos]
 *
 */
router.get('/alumnos', getAlumnos);

export default router;
