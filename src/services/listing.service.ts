import { container, inject, injectable } from "tsyringe";
import { IListingRepository, IListingService } from "../interfaces/listing.interface";
import Listing from "../models/listing.model";
import ListingRepository from "../repositories/listing.repository";


container.register("IListingRepository", {
    useClass: ListingRepository,
});

@injectable()
export class ListingService implements IListingService {
  constructor(
    @inject("IListingRepository") private listingRepository: IListingRepository
  ) {
    this.postListing = this.postListing.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
   }
public async postListing(listing: Listing):Promise<void>{
  
    return await this.listingRepository.postListing(listing)
}

public async deleteListing(listing: Listing): Promise<void> {

}

}
