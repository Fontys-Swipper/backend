import { IUserRepository } from "../interfaces/user.interface";
import User from "../models/user.model";


export default class UserRepository implements IUserRepository {
    constructor() {}


public async postUserCredentials(user: User): Promise<void> {
    
}


}