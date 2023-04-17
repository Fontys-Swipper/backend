import { NextFunction, Request, Response } from 'express';
import {getManager} from "typeorm";
import {Listing} from "../models/listing.model";
import { IUserRepository } from "../interfaces/user.interface";
import { User } from '../models/user.model';

export default class UserRepository implements IUserRepository {
    constructor() {

    }

    async postUser(request: Request, response: Response) {

      const UserRepository = getManager().getRepository(User);
      const newUser = UserRepository.create(request.body);
  
      await UserRepository.save(newUser);
  
      response.send(newUser);
    }

    

    async getUser(request: Request, response: Response) {

      const UserRepository = getManager().getRepository(User);
      const user = await UserRepository.findOneBy({
        id: Number(request.params),
      });
  
      // if post was not found return 404 to the client
      if (!user) {
          response.status(404);
          response.end();
          return;
      }
      response.send(user);
  }

  async updateUser(request: Request, response: Response) {
    const UserRepository = getManager().getRepository(User);
    const { id } = request.params;
    const user = await UserRepository.findOneBy({
      id: Number(request.params),
    });
    
    if (!user) {
      response.status(404);
      response.end();
      return;
    }
    
    UserRepository.merge(user, request.body);
    const updatedUser = await UserRepository.save(user);
    
    response.send(updatedUser);
  }

  async deleteUser(request: Request, response: Response) {
    const UserRepository = getManager().getRepository(User);
    const { id } = request.params;
    const user = await UserRepository.findOneBy({
      id: Number(request.params),
    });
    
    if (!user) {
      response.status(404);
      response.end();
      return;
    }
    
    await UserRepository.remove(user);
    
    response.send(user);
  }
}