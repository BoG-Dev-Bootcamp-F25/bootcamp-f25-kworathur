import connectDB from '..';
import { Ticket } from '../models/Ticket';
import { InferSchemaType } from 'mongoose';
type TicketType = InferSchemaType<typeof Ticket.schema>;

const readTicketsByUser = async (
    userId: string
): Promise<Array<TicketType> | null> => {
    try {
        await connectDB();
        const tickets = await Ticket.find({ user: userId }).exec();
        return tickets;
    } catch (err) {
        console.error(`Error encountered when reading tickets for user ${userId} : ${err}`);
        return null;
    }
};

export default readTicketsByUser;
