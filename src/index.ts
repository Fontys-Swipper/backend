import "reflect-metadata";
 import express, { Express, Request, Response } from "express";
import { container } from "tsyringe";
import { UserController } from "./controllers/user.controller";
import UserRepository from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { ListingController } from "./controllers/listing.controller";
import { ListingService } from "./services/listing.service";
import ListingRepository from "./repositories/listing.repository";


const app: Express = express();
app.use(express.json());


//main function?
//async function main() {
//  await connectToMongodb();
//  const app = new Applicaction();
//  app.start();
//}

const userController = container.resolve(UserController);
const userService = container.resolve(UserService);
const userRepository = container.resolve(UserRepository);

const listingController = container.resolve(ListingController);
const listingService = container.resolve(ListingService);
const listingRepository = container.resolve(ListingRepository);

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

//delete user profile (delete)




// makes a "/home" route that sends "This is an api route" to the browser
app.get("/home", (req: Request, res: Response ) => {
  res.status(200).send("<h1>This is a api route</h1>");
});


// tells express that the api gets hosted on port 3001
app.listen(3001, () => console.log("app listening on port 3001"));
