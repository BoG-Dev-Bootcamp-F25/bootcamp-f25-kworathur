import deleteTicket from '@/server/mongodb/actions/deleteTicket';
import searchTicket from '@/server/mongodb/actions/searchTicket';
import { NextRequest } from 'next/server';

export const DELETE = async (
    req: NextRequest
): Promise<Response> => {
    const searchParams = req.nextUrl.searchParams;
    const ticketId = searchParams.get('ticketId');

    if (!ticketId) {
        return new Response(JSON.stringify({ error: 'Request parameter ticketId is missing.' }), {
            status: 400,
        });
    }

    const ticket = searchTicket(ticketId);

    if (!ticket) {
        return new Response(JSON.stringify({ error: 'Ticket Not Found.' }), {
            status: 400,
        });
    }

    const ticketDeleted = await deleteTicket(ticketId);
    if (!ticketDeleted) {
        return new Response(JSON.stringify({ error: 'Failed' }), {
            status: 400,
        });
    }

    return new Response(
        JSON.stringify({ message: 'Success' }),
        { status: 200 }
    );
};
