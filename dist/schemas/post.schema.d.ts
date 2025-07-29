import { Document, Model, Types } from "mongoose";
export interface IPost {
    title: string;
    content: string;
    authorId: Types.ObjectId;
}
export interface IPostDoc extends IPost, Document {
    _id: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export interface IPostModel extends Model<IPostDoc> {
}
