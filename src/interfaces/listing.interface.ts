import { Listing }   from "../models/listing.model";
import express, { Request, Response } from "express";

export interface IListingController {
    postListing(req: Request, res: Response):Promise<void>;
    deleteListing(req: Request, res: Response): Promise<void>;
    getListing(req: Request, res: Response): Promise<Listing>;
    updateListing(req: Request, res: Response): Promise<void>;
}


export interface IListingService {
    postListing(listing: Listing): Promise<void>;
    deleteListing(listing: Listing): Promise<void>;
    getListing(): Promise<void>;
    updateListing(listing: Listing): Promise<void>;
}

export interface IListingRepository {
    postListing(listing: Listing): Promise<void>;
    deleteListing(listing: Listing): Promise<void>;
    getListing(): Promise<Listing>;
    updateListing(listing: Listing): Promise<void>;
}
