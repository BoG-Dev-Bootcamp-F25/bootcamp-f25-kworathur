import connectDB from '..';
import { Ticket } from '../models/Ticket';

const deleteTicket = async (ticketID: string) => {
    try {
        await connectDB();
        await Ticket.findByIdAndDelete(ticketID).exec();
    } catch (err) {
        console.error(`[ERROR] Could not delete ticket from DB: ${err}`);
    }
};

export default deleteTicket;
