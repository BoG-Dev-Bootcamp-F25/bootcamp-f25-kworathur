import { InferSchemaType } from 'mongoose';
import connectDB from '..';
import { User } from '../models/User';


interface UserData {
    email: string;
    password: string;
    name: string;
}

const createUser = async (userData: UserData): Promise<boolean> => {
    try{
        const newUser = new User(userData);
        await connectDB();
        await newUser.save();
    } catch (err) {
        console.error(`[ERROR]: Error encountered while creating user: ${err}`);
        return false;
    }
    return true;
    
};

export default createUser;
