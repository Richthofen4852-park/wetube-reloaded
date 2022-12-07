import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
}

app.get("/", gossipMiddleware, (req, res) => {
  return res.send("I`m love middlewares");
});

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}!`);

app.listen(PORT, handleListening)