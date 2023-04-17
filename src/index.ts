import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnections } from 'typeorm';
import { container } from "tsyringe";
import { UserController } from "./controllers/user.controller";
import UserRepository from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { ListingController } from "./controllers/listing.controler";
import { ListingService } from "./services/listing.service";
import ListingRepository from "./repositories/listing.repository";
const app = express();
app.use(express.json());



const userController = container.resolve(UserController);
const userService = container.resolve(UserService);
const userRepository = container.resolve(UserRepository);

const listingController = container.resolve(ListingController);
const listingService = container.resolve(ListingService);
const listingRepository = container.resolve(ListingRepository);

createConnections().then(connections => {
  // connections are now established
}).catch(error => {
  // error connecting to the databases
});


//sign up (post)
app.post("/signup", async (req: Request, res: Response) => {
  return await userController.postSignUpCredentials(req, res)
});
//login (post)
app.post("/login", async (req: Request, res: Response) => {
  return await userController.postSignInCredentials(req, res)
});

app.post("/listing/post", async (req: Request, res: Response) => {
  return await listingController.postListing(req, res)
});

app.put("/listing/update", async (req: Request, res: Response) => {
  return await listingController.updateListing(req, res)
});

app.delete("/listing/delete", async (req: Request, res: Response) => {
  return await listingController.deleteListing(req, res)
});

app.get("/listing/get", async (req: Request, res: Response) => {
    return await listingController.getListing(req, res)
});

//favorite list (post)




//Update user profile (put)
app.put("/user/update", async (req: Request, res: Response) => {
  return await userController.updateUser(req, res)
});
//delete user profile (delete)
app.delete("/user/delete", async (req: Request, res: Response) => {
  return await userController.deleteUser(req, res)
});



app.get("/", (req: Request, res: Response) => {
    res.status(200).send("<h1>Welcome to the API for Swipper!</h1>");
});


// tells express that the api gets hosted on port 3001
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`app listening on port ${port}`));
