//import {Gender, getInstance} from "./services/Person";
// DateJS format: mm-dd-yyyy
/*
const me = getInstance(1, "Maurice", Gender.MALE, new Date("10-02-2000"));

console.log(me.birthDate.toString());
*/

import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./config/db";
import morgan from "morgan";
import history from 'connect-history-api-fallback';
import path from 'path';
import routerClient from "./routers/client";
import routerPet from "./routers/mascot";
import routerUser from "./routers/user";
import routerSpecie from "./routers/specie";
import routerAuth from "./routers/auth";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This middleware is used to handle the Vue router in history mode
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/clients/", routerClient);
app.use("/api/mascots/", routerPet);
app.use("/api/species/", routerSpecie);
app.use("/api/users/", routerUser);
app.use("/api/login/", routerAuth);
  
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.set("port", process.env.PORT || 3000);

db().then(() => console.log("Conexion Ready"));

app.listen(app.get("port"), () => {
    console.log(`Server listening on port: ${app.get("port")}`);
});
