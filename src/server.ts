import express, { response, request } from "express";

const app = express();
app.listen(3333, () => {
    console.log("🚀 Server started on port 3333.");
});

app.get("/", (request, response) => {
    return response.json({ message: "Hello GoStack" });
});
