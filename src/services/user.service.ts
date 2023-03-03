import { IUserService } from "../interfaces/user.interface";
import { IUserRepository } from "../interfaces/user.interface";
import { container, inject, injectable } from "tsyringe";
import UserRepository from "../repositories/user.repository";
import User from "../models/user.model";

container.register("IUserRepository", {
    useClass: UserRepository,
});

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {
    this.postUserCredentials = this.postUserCredentials.bind(this);
  }

 public async postUserCredentials(user: User): Promise<void> {
    
  }



}
