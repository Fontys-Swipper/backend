import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";

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
    has_pet: string;

    @Column()
    has_garden: string;


}