import { type Request, type Response } from "express";
import { getSurfConditions } from "../services/openMeteo.js";
import { formatConditions } from "../utils/formatConditions.js";

export async function getConditions(req: Request, res: Response) {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res
      .status(400)
      .json({ erro: "Digite lat e lng na query. Ex: ?lat=-29&lng=309" });
  }

  try {
    const data = await getSurfConditions(Number(lat), Number(lng));
    const conditions = formatConditions(data);

    res.json(conditions);
  } catch (error) {
    res.status(500).json({
      erro: "Erro inesperado, digite as coordenadas novamente e tente mais tarde.",
    });
  }
}
