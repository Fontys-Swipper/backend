import { IListingRepository } from "../interfaces/listing.interface";
import { NextFunction, Request, Response } from 'express';
import {getManager} from "typeorm";
import {Listing} from "../models/listing.model";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export default class ListingRepository implements IListingRepository {
  constructor() {}

    async postListing(request: Request, response: Response) {
        const listingRepository = getManager().getRepository(Listing);
        const newPost = listingRepository.create(request.body);
    
        await listingRepository.save(newPost);
    
        response.send(newPost);
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
      
      
}

