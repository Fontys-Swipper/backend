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
    
      const apiListing = await this.getAnimalInfo(listing.animal_species);
      const mergedListing = await this.mergeListings(listing, apiListing);
    
      response.send(mergedListing);
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
    
      async mergeListings(params1: Listing, params2: Listing): Promise<Listing> {
        return new Promise((resolve, reject) => {
          try {
            const mergedListing = { ...params1, ...params2 };
            resolve(mergedListing);
          } catch (error) {
            reject(error);
          }
        });
      }
      

      async getAnimalInfo(animal: string): Promise<Listing> {
        const url = `https://api.api-ninjas.com/v1/dogsname=${animal}`;
        const apiKey = 'l2XdV+yenf2+H7VKAlkHDg==sKfFgpsacZZUu0tE';
      
        const options = {
          url,
          headers: {
            'X-Api-Key': apiKey,
          },
        };
      
        return new Promise((resolve, reject) => {
          request.get(options, (error: any, response: any, body: any) => {
            if (error) {
              reject(error);
            } else if (response.statusCode !== 200) {
              reject(new Error(`Request failed with status code ${response.statusCode}`));
            } else {
              const data = JSON.parse(body);
      
              const listing: Listing = {
                listing_id: data.listing_id,
                animal_name: data.animal_name,
                animal_species: data.animal_species,
                animal_image_link: data.animal_image_link,   
                animal_good_with_children: data.animal_good_with_children,
                animal_good_with_other_dogs: data.animal_good_with_other_dogs,
                animal_shedding: data.animal_shedding,
                animal_grooming: data.animal_grooming,
                animal_drooling: data.animal_drooling,
                animal_coat_length: data.animal_coat_length,
                animal_good_with_strangers: data.animal_good_with_strangers,
                animal_playfulness: data.animal_playfulness,
                animal_protectiveness: data.animal_protectiveness,
                animal_trainability: data.animal_trainability,
                animal_energy: data.animal_energy,
                animal_barking: data.animal_barking,
                animal_min_life_expectancy: data.animal_min_life_expectancy,  
                animal_max_life_expectancy: data.animal_max_life_expectancy,
                animal_max_height_male: data.animal_max_height_male,
                animal_max_height_female: data.animal_max_height_female,
                animal_max_weight_male: data.animal_max_weight_male,
                animal_max_weight_female: data.animal_max_weight_female,
                animal_min_height_male: data.animal_min_height_male,
                animal_min_height_female: data.animal_min_height_female,
                animal_min_weight_male: data.animal_min_weight_male,
                animal_min_weight_female: data.animal_min_weight_female
              };
      
              resolve(listing);
            }
          });
        });
      }
      
      
}

