import createTicket from "@/server/mongodb/actions/createTicket";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) : Promise<Response> => {
    const reqBody = await req.json()
    const {lineColor, station, user} = reqBody

    if (!lineColor || !station || !user) {
        return new Response(JSON.stringify({error: "fields lineColor, station, and user are required!"}), {status: 400})
    }

    // create the user in the database
    const newTicket = await createTicket(reqBody);

    if (!newTicket) {
        return new Response(JSON.stringify({error: "failed to create new ticket" }), {status: 500});
    }

    return new Response(JSON.stringify({message: "success", id: newTicket.data.id_}), {status: 200})
}