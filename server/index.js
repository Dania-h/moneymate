import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(8080, () => {
    console.log("Server started on port 8080");
});