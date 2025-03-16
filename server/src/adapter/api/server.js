"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Use Routes
app.use("", routes_1.urlRouter);
// Health Check Route
app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
