import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export interface Listing {
    listing_id: number;
    animal_name: string;
    animal_image_link?: string;   
    animal_good_with_children?: number;   
    animal_good_with_other_dogs?: number;   
    animal_shedding?: number;   
    animal_grooming?: number;   
    animal_drooling?: number;   
    animal_coat_length?: number;   
    animal_good_with_strangers?: number;   
    animal_playfulness?: number;   
    animal_protectiveness?: number;   
    animal_trainability?: number;   
    animal_energy?: number;   
    animal_barking?: number;   
    animal_min_life_expectancy?: number;   
    animal_max_life_expectancy?: number;   
    animal_max_height_male?: number;   
    animal_max_height_female?: number;   
    animal_max_weight_male?: number;   
    animal_max_weight_female?: number;   
    animal_min_height_male?: number;   
    animal_min_height_female?: number;   
    animal_min_weight_male?: number;   
    animal_min_weight_female?: number;   
    animal_species: string;
}

@Entity()
export class Listing {

    @PrimaryGeneratedColumn()
    listing_id: number;

    @Column()
    animal_species: string;

    @Column()
    animal_name: string;
}