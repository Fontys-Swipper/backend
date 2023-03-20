import { IUserRepository } from "../interfaces/user.interface";
import User from "../models/user.model";


export default class UserRepository implements IUserRepository {
    constructor() {}


public async postSignUpCredentials(user: User): Promise<void> {
    
}
public async postSignInCredentials(user: User): Promise<void> {
    
}
public async updateUser(user: User): Promise<void> {

}
public async deleteUser(user: User): Promise<void> {
    
}
}