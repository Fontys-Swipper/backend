import mongoose, { Schema, Document } from 'mongoose';

export interface Listing extends Document {
    readonly listing_id: number;
    animal_id: number;
    species_id: number;
}

const listingSchema: Schema = new mongoose.Schema({
  listing_id: { type: Number, required: true },
  animal_id: { type: Number, required: true },
  species_id: { type: Number, required: true },
});

export default mongoose.model<Listing>('Listing', listingSchema);