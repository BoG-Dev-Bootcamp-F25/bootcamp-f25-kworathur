import createUser from '@/server/mongodb/actions/createUser';
import readTicketsByUser from '@/server/mongodb/actions/readTicketsByUser';
import searchUser from '@/server/mongodb/actions/searchUser';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest): Promise<Response> => {
    
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
        return new Response(
            JSON.stringify({ error: 'Parameter userId is required' }),
            { status: 400 }
        );
    }

    const user = await searchUser(userId);

    if (!user) {
        return new Response(JSON.stringify({ error: 'User Not Found.' }), {
            status: 400,
        });
    }

    // create the user in the database
    const tickets = await readTicketsByUser(userId);

    if (tickets == null) {
        return new Response(
            JSON.stringify({ message: 'Failed' }),
            { status: 500 }
        );
    }

    return new Response(
        JSON.stringify({ message: 'Success' , data: {tickets}}),
        { status: 200 }
    );
};
