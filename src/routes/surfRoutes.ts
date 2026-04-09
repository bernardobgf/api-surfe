import { Router, type Request, type Response } from "express";
import { getConditions } from "../controllers/surfController.js";

const router = Router();

/**
 * @swagger
 * /surf/conditions:
 *   get:
 *     summary: Retorna as condições de surfe
 *     description: Busca previsão de 7 dias com score por hora para a localização informada
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude da localização
 *         example: -27.6
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude da localização
 *         example: -48.4
 *     responses:
 *       200:
 *         description: Lista de condições por hora
 *       400:
 *         description: Latitude e longitude não informados
 *       500:
 *         description: Erro ao buscar condições
 */
router.get("/conditions", getConditions);

export { router };
