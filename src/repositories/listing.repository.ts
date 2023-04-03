import { IListingRepository } from "../interfaces/listing.interface";
<<<<<<< Updated upstream
import { NextFunction, Request, Response } from 'express';
import {getManager} from "typeorm";
import {Listing} from "../models/listing.model";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
=======
import { Document, Model } from "mongoose";

import { Listing } from "../models/listing.model";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb+srv://Backend:aTLOpFcGdeLuaRlG")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
>>>>>>> Stashed changes

export default class ListingRepository implements IListingRepository {
  constructor() {}

  public async postListing(listing: Listing): Promise<void> {
    const savedListing = await listing.save();
  }

<<<<<<< Updated upstream
    async postListing(request: Request, response: Response) {
        const listingRepository = getManager().getRepository(Listing);
        const newPost = listingRepository.create(request.body);
    
        await listingRepository.save(newPost);
    
        response.send(newPost);
    }

    async getListing(request: Request, response: Response) {

        const listRepository = getManager().getRepository(Listing);
        const listing = await listRepository.findOneBy({
            listing_id: Number(request.params.id),
        });
    
        // if post was not found return 404 to the client
        if (!listing) {
            response.status(404);
            response.end();
            return;
        }
        response.send(listing);
    }

    async updateListing(request: Request, response: Response) {
        const listingRepository = getManager().getRepository(Listing);
        const { id } = request.params;
        const listing = await listingRepository.findOneBy({
            listing_id: Number(request.params.id),
        });
    
        
        if (!listing) {
          response.status(404);
          response.end();
          return;
        }
        
        listingRepository.merge(listing, request.body);
        const updatedListing = await listingRepository.save(listing);
        
        response.send(updatedListing);
      }
      
      async deleteListing(request: Request, response: Response) {
        const listingRepository = getManager().getRepository(Listing);
        const { id } = request.params;
        const listing = await listingRepository.findOneBy({
            listing_id: Number(request.params.id),
        });
    
        
        if (!listing) {
          response.status(404);
          response.end();
          return;
        }
        
        await listingRepository.remove(listing);
        
        response.send(listing);
      }
}

=======
  public async deleteListing(listing: Listing): Promise<void> {
         const deletedListing = await listing.deleteOne(listing.id);

   }

  public async getListing(id: number, listing: Listing): Promise<Listing> {
         const listings = await listing.find(id);
         return listings;

   }

  public async updateListing(listing: Listing): Promise<void> {
         const updatedListing = await listing.findByIdAndUpdate(
          listing.id,
          //{ username: req.body.username, password: req.body.password },
          { new: true }
        );
    
  }
}
>>>>>>> Stashed changes
