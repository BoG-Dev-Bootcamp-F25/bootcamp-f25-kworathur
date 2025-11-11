import connectDB from "..";
import { Ticket } from "../models/Ticket";


interface TicketData {
    lineColor: string;
    station: string;
    user: string;
}

interface CreateTicketResponse {
    data: TicketData & {id_: string}
}

const createTicket = async (ticketData: TicketData): Promise<CreateTicketResponse | null> => {
    try {
        const newTicket = new Ticket(ticketData);
        await connectDB();
        await newTicket.save()
        const responseData: CreateTicketResponse = {data: {lineColor: newTicket.lineColor, station: newTicket.station, userID: newTicket.userID, id_: newTicket.id}}
        return responseData
    } catch (err) {
        console.error(`[ERROR]: Error encountered while saving ticket ${err}`);
        return null;
    }
}

export default createTicket;