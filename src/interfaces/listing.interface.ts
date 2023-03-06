import Listing  from "../models/listing.model";
import express, { Request, Response } from "express";

export interface IListingController {
    postListing(req: Request, res: Response):Promise<void>;
}


export interface IListingService {
    postListing(listing: Listing): Promise<void>;
}

export interface IListingRepository {
    postListing(listing: Listing): Promise<void>;
}

