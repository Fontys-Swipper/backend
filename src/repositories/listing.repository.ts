import { IListingRepository } from "../interfaces/listing.interface";
import Listing from "../models/listing.model";



export default class ListingRepository implements IListingRepository {
    constructor() {

    }



public async postListing(listing: Listing): Promise<void> {

}

public async deleteListing(listing: Listing): Promise<void> {

}
    public async getListing(): Promise<Listing> {
        const listing: Listing = {
            listing_id: 1,
            animal_id: 1,
            species_id: 1
        }
        return listing;
    }

}


