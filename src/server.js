import Express from "express";
import router from "./routes/index.route.js";

const app = Express();

app.use(Express.json());
app.use(router);

export default app;