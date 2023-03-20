import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export interface Listing {
    listing_id: number;
    animal_id: number;
    species_id: number;

}

@Entity()
export class Listing {

    @PrimaryGeneratedColumn()
    listing_id: number;

    @Column()
    animal_id: number;

    @Column()
    species_id: number;
}
