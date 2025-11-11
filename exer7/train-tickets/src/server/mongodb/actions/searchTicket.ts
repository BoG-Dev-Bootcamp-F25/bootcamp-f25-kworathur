import connectDB from ".."
import { Ticket } from "../models/Ticket";

const searchTicket = async (ticketID: string) => {
    try {
        await connectDB();
        const ticket = await Ticket.findById(ticketID).exec();
        if (!ticket) {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}

export default searchTicket;