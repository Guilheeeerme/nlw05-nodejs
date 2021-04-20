import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  });
});

export { app };
