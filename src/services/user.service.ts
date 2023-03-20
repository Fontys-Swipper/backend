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
    this.postSignUpCredentials = this.postSignUpCredentials.bind(this);
    this.postSignInCredentials = this.postSignInCredentials.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

 public async postSignUpCredentials(user: User): Promise<void> {
    
  }

  public async postSignInCredentials(user: User): Promise<void> {
    
  }

  public async updateUser(user: User): Promise<void> {

  }

  public async deleteUser(user: User): Promise<void> {
    
  }
}
