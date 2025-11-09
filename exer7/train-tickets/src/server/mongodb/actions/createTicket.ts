import connectDB from "..";
import { Ticket } from "../models/Ticket";


interface TicketData {
    fields: string;
    lineColor: string;
    station: string;
    userID: string;
}

const createTicket = async (ticketData: TicketData): Promise<boolean> => {
    try {
        const newTicket = new Ticket(ticketData);
        await connectDB();
        await newTicket.save()
        return true;
    } catch (err) {
        console.error(`[ERROR]: Error encountered while saving ticket ${err}`);
        return false;
    }
}

export default createTicket;