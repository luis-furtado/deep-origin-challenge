import express from "express";
import cors from "cors";
import { urlRouter } from "./routes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Use Routes
app.use("", urlRouter);

// Health Check Route
app.get("/health", (req: any, res: any) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});