import express from "express";
import cors from "cors";
import "dotenv/config";

import { router } from "./routes/surfRoutes.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

//rotas
app.use("/surf", router);

//servidor
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
