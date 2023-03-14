import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
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

const userSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  addres: { type: String, required: false },
  living_space: { type: Number, required: false },
  description: { type: String, required: false },
  company_name: { type: String, required: false },
  has_pet: { type: Boolean, required: false },
  has_garden: { type: Boolean, required: false },
});

export default mongoose.model<IUser>('User', userSchema);