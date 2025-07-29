import { model, Schema } from "mongoose";
import { IPostDoc, IPostModel } from "../schemas/post.schema";

const PostSchema = new Schema<IPostDoc>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

export const Post = model<IPostDoc, IPostModel>("Post", PostSchema);
