export default interface User {
    readonly id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address?: string;
    living_space?: number;
    description?: string;
    company_name?: string;
    has_pet?: boolean;
    has_garden?: boolean;
}