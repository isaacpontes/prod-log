import "reflect-metadata";
import "./database";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started successfully. Listening on port ${port}`));
