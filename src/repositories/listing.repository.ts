import { IListingRepository } from "../interfaces/listing.interface";
import Listing from "../models/listing.model";
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();

mongoose
  .connect('mongodb+srv://Backend:aTLOpFcGdeLuaRlG')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

export default class ListingRepository implements IListingRepository {
    constructor() {

    }



public async postListing(listing: Listing): Promise<void> {
    app.post('/listings', async (req: Request, res: Response) => {
        try {
            const savedListing = await listing.save();
      
          res.status(201).json(savedListing);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}

public async deleteListing(listing: Listing): Promise<void> {
    app.delete('/listing/:listing_id', async (req: Request, res: Response) => {
        try {
          const deletedListing = await Listing.findByIdAndDelete(req.params.id);
      
          if (!deletedListing) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.status(200).json({ message: 'Listing deleted', deletedListing });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}


public async getListing(): Promise<Listing> {
    app.get('/listings', async (req: Request, res: Response) => {
        try {
          const listings = await Listing.find();
      
          if (Listing.length === 0) {
            return res.status(404).json({ message: 'No listings found' });
          }
      
          res.status(200).json(listings);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });    
}
    
public async updateListing(listing: Listing): Promise<void> {
    app.put('/listings/:listing_id', async (req: Request, res: Response) => {
        try {
          const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            //{ username: req.body.username, password: req.body.password },
            { new: true }
          );
      
          if (!updatedListing) {
            return res.status(404).json({ message: 'Listing not found' });
          }
      
          res.status(200).json({ message: 'Listing updated', updatedListing });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        }
      });
}

}




