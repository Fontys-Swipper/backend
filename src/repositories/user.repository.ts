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
      const user = await UserRepository.findOneBy(request.params);
  
      // if post was not found return 404 to the client
      if (!user) {
          response.status(404);
          response.end();
          return;
      }
      response.send(user);
  }
}

export async function postUser(request: Request, response: Response) {

    const UserRepository = getManager().getRepository(User);
    const newUser = UserRepository.create(request.body);

    await UserRepository.save(newUser);

    response.send(newUser);
}
    
export async function getUser(request: Request, response: Response) {

    const UserRepository = getManager().getRepository(User);
    const user = await UserRepository.findOneBy(request.params);

    // if post was not found return 404 to the client
    if (!user) {
        response.status(404);
        response.end();
        return;
    }
    response.send(user);
}

