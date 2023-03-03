import User from "../models/user.model";
import express, { Request, Response } from "express";

export interface IUserService {
    postUserCredentials(user: User): Promise<void>;
}

export interface IUserController {
    postUserCredentials(req: Request, res: Response): Promise<void>;
}

export interface IUserRepository {
    postUserCredentials(user: User): Promise<void>;
}