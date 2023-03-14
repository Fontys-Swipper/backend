import { IUserRepository } from "../interfaces/user.interface";
import express, { Request, Response } from 'express';
import User from "../models/user.model"
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect('mongodb+srv://Backend:aTLOpFcGdeLuaRlG')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

//const connectionString = "mongodb+srv://Backend:aTLOpFcGdeLuaRlG@<your-cluster-url>/test?retryWrites=true&w=majority";

export default class UserRepository implements IUserRepository {
    constructor() {}


public async postSignUpCredentials(user: User): Promise<void> {
    
}
public async postSignInCredentials(user: User): Promise<void> {
    
}

public async postUser(user: User): Promise<void> {
  app.post('/users', async (req: Request, res: Response) => {
    try {
        const savedUser = await user.save();
  
      res.status(201).json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
}

public async deleteUser(user: User): Promise<void> {
  app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
      const deletedUser = await user.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted', deletedUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
}

public async getUser(): Promise<User> {
  app.get('/users', async (req: Request, res: Response) => {
    try {
      const users = await User.find();
  
      if (users.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
  
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
    
}
    
public async updateUser(user: User): Promise<void> {
  app.put('/users/:id', async (req: Request, res: Response) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { username: req.body.username, password: req.body.password },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated', updatedUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
}

}