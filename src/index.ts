import express, { Request, Response } from "express";

const app = express();

// maakt een  "/home" route om "Hallo dit is een api route" te sturen naar de browser
app.get("/home", (req: Request, res: Response ) => {
  res.status(200).send("<h1>Dit is een api route</h1>");
});
app.listen(3001, () => console.log("app listening on port 3001"));