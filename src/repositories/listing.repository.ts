import { IListingRepository } from "../interfaces/listing.interface";
import Listing from "../models/listing.model";

 

export default class ListingRepository implements IListingRepository {
    constructor() {
        
    }



public async postListing(listing: Listing): Promise<void> {
    
}

public async deleteListing(listing: Listing): Promise<void> {
    
}


}