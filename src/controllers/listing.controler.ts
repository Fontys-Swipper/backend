import { container, inject, injectable } from "tsyringe";
import express, { Request, Response } from "express";
import { IListingController} from "../interfaces/listing.interface";
import { ListingService } from "../services/listing.service";
import Listing from "../models/listing.model";
container.register("IListingService", {
  useClass: ListingService,
});

@injectable()
export class ListingController implements IListingController {
  constructor(
    @inject("IListingService") private listingService: ListingService,
  ) {
    this.postListing = this.postListing.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
    this.getListing = this.getListing.bind(this);
    this.updateListing = this.updateListing.bind(this);
  }

  public async postListing(req: Request, res: Response): Promise<void> {

     const listing = req.body;

    this.listingService.postListing(listing);
    res.status(200).send();
  }

  public async deleteListing(req: Request, res: Response): Promise<void> {

  }

  public  async getListing(req: Request, res: Response): Promise<void> {
    try {

      const listing: Listing = await this.listingService.getListing();

      res.status(200).send(listing);
    } catch (error) {
      res.status(500).send({ error: 'Wollah dit gaat mis' });
    }
  }

  public async updateListing(req: Request, res: Response): Promise<void> {

  }
}
