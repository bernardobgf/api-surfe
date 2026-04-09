import express from "express";
import cors from "cors";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes/surfRoutes.js";
import { swaggerSpec } from "./config/swagger.js";

const app = express();
const PORT = process.env.PORT || 3333;
const allowedOrigins = ["", process.env.FRONTEND_URL ?? ""].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json());

//rotas
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/surf", router);

//servidor
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
