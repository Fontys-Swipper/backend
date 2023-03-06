import User from "../models/user.model";
import express, { Request, Response } from "express";

export interface IUserController {
    postSignUpCredentials(req: Request, res: Response): Promise<void>;
    postSignInCredentials(req: Request, res: Response): Promise<void>;
}

export interface IUserService {
    postSignUpCredentials(user: User): Promise<void>;
    postSignInCredentials(user: User): Promise<void>;
}


export interface IUserRepository {
    postSignUpCredentials(user: User): Promise<void>;
    postSignInCredentials(user: User): Promise<void>;

}