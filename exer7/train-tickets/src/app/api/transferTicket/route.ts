import searchTicket from '@/server/mongodb/actions/searchTicket';
import searchUser from '@/server/mongodb/actions/searchUser';
import updateTicketByUser from '@/server/mongodb/actions/updateTicketByUser';
import { NextRequest } from 'next/server';

export const PATCH = async (req: NextRequest): Promise<Response> => {
    const { ticketId, userId } = await req.json();

    const ticket = await searchTicket(ticketId);
    if (!ticket) {
        return new Response(JSON.stringify({ error: 'Ticket Not Found.' }), {
            status: 400,
        });
    }

    const user = await searchUser(userId);

    if (!user) {
        return new Response(JSON.stringify({ error: 'User Not Found.' }), {
            status: 400,
        });
    }

    const ticketUpdated = await updateTicketByUser(ticketId, userId);

    if (!ticketUpdated) {
        return new Response(JSON.stringify({ error: 'Failed' }), {
            status: 400,
        });
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
        status: 200,
    });
};
