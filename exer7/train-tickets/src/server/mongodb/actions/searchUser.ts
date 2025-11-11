import connectDB from ".."
import { User } from "../models/User";

const searchUser = async (UserID: string) => {
    try {
        await connectDB();
        const user = await User.findById(UserID).exec();
        if (!user) {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}

export default searchUser;