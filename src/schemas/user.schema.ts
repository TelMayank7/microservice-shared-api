import { Model, Types } from "mongoose";

export interface IUSer {
    name: string;
    email: string;
    password: string;
    age : number;
}

export interface IUSerDoc extends IUSer {
    _id : Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserModel extends Model<IUSerDoc> {
    getUserByEmail(email: string): Promise<IUSerDoc | null>;
    getUserById(id: Types.ObjectId): Promise<IUSerDoc | null>;
}