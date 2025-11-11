import mongoose, { InferSchemaType, Model, Schema, model, models } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
    age: {
        type: Number
    }
});

export const User: Model<InferSchemaType<typeof userSchema>> = models.User ?? model('User', userSchema);
