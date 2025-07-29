import { model, Schema } from "mongoose";
import { IUSerDoc, IUserModel } from "../schemas/user.schema";


const UserSchema = new Schema<IUSerDoc>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
}, {     
    timestamps: true
})

export const User = model<IUSerDoc , IUserModel>("User", UserSchema);