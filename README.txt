API setup

zorg dat je node.js hebt geinstalleerd OP JE LAPTOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

(terminal)	npm init -y

(terminal)	npm install typescript -g

	mapje "src" aanmaken

	bestand index.ts aanmaken in src

(terminal)	npm install express
(terminal)	npm install dotenv
(terminal)	npm install reflect-metadata
(terminal)	npm install ts-node
(terminal)	npm install tsyringe
(terminal)	npm install @types/express
(terminal)	npm install @types/node

of npm install



in het bestand index.ts :  



import express, { Request, Response } from "express";

const app = express();

// maakt een  "/home" route om "Hallo dit is een api route" te sturen naar de browser
app.get("/home", (req: Request, res: Response ) => {
  res.status(200).send("<h1> Dit is een api route</h1>");
});
app.listen(3001, () => console.log("app listening on port 3001"));


in het  bestand package.json onder het kopje "scripts" :

    "dev": "ts-node src/index.ts"


(terminal) npm run dev
^^^ dit start de API op localhost:3001

(terminal) ctrl + c
^^^ dit stopt de api








