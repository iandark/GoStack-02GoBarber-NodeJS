import { Router } from "express";
import appointmentsRouter from "./appointments.routes";
import users from "./users.routes";

const routes = Router();
routes.use("/appointments", appointmentsRouter);
routes.use("/users", users);

routes.get("/", (request, response) => {
    return response.json({ message: "Hello GoStack" });
});

routes.post("/users", (request, response) => {
    console.log(request.body);

    const { name, email } = request.body;

    const user = {
        name,
        email,
    };
});

export default routes;
