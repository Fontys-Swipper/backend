import { container, inject, injectable } from "tsyringe";
import express, { Request, Response } from "express";
import { IUserController } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";

container.register("IUserService", {
    useClass: UserService,
  });

  @injectable()
  export class UserController implements IUserController {
    constructor(@inject("IUserService") private userService: UserService) {
        this.postUserCredentials = this.postUserCredentials.bind(this);
    }

public async postUserCredentials(req: Request, res: Response): Promise<void> {

}





  }