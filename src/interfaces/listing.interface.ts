import { Listing }   from "../models/listing.model";
import express, { Request, Response } from "express";

export interface IListingController {
    postListing(req: Request, res: Response):Promise<void>;
    deleteListing(req: Request, res: Response): Promise<void>;
    getListing(req: Request, res: Response): Promise<void>;
    updateListing(req: Request, res: Response): Promise<void>;
}


export interface IListingService {
    postListing(req: Request, res: Response):Promise<void>;
    deleteListing(req: Request, res: Response): Promise<void>;
    getListing(req: Request, res: Response): Promise<void>;
    updateListing(req: Request, res: Response): Promise<void>;
}

export interface IListingRepository {
    postListing(req: Request, res: Response):Promise<void>;
    deleteListing(req: Request, res: Response): Promise<void>;
    getListing(req: Request, res: Response): Promise<void>;
    updateListing(req: Request, res: Response): Promise<void>;
}
