import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";

export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    living_space: string;
    description: string;

    company_name: string;
    has_pet: boolean;
    has_garden: boolean;
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    address: string;

    @Column()
    living_space: string;

    @Column()
    description: string;

    @Column()
    company_name: string;

    @Column()
    has_pet: boolean;

    @Column()
    has_garden: boolean;
}