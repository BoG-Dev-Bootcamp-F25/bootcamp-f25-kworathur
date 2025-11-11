import { ObjectId } from 'mongoose';
import connectDB from '..';
import { Ticket } from '../models/Ticket';

const updateTicketByUser = async (ticketId: ObjectId, newUserId: ObjectId) => {
    try {
        await connectDB();
        const result = await Ticket.findByIdAndUpdate(ticketId, { user: newUserId })
            .exec();
        if (result.modifiedCount == 0) {
            console.error(`Could not find ticket with id ${ticketId}`);
            return false;
        }
        return true;
    } catch (err) {
        console.error(
            `Error encountered while updating user ID of ticket ${ticketId}: ${err}`
        );
        return false;
    }
};

export default updateTicketByUser;
