import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { UserController } from "./controllers/user.controller";
import UserRepository from "./repositories/user.repository";
import { UserService } from "./services/user.service";

const app = express();
app.use(express.json());


 
const userController = container.resolve(UserController);
const userService = container.resolve(UserService);
const userRepository = container.resolve(UserRepository);

 

//sign up (post) 
app.post("/signup", (req: Request, res: Response) => {
  userController.postSignUpCredentials(req, res)
});

app.post("/login", (req: Request, res: Response) => {
  userController.postSignInCredentials(req, res)
});



//login (post)

//Listing (post)

//Listing update (put)

//Listing delete (delete)

//Listing display (get)

//favorite list (post)

//Update user profile (put)

//delete user profile (delete)




// maakt een  "/home" route om "Hallo dit is een api route" te sturen naar de browser
app.get("/home", (req: Request, res: Response ) => {
  res.status(200).send("<h1>Dit is een api route</h1>");
});


//vertelt express dat de api op port 3001 gehost wordt
app.listen(3001, () => console.log("app listening on port 3001"));