import express from "express";

import router from "./routes/routes";

const app = express();

app.use("", router);

export default app;
