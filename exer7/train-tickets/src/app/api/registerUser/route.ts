import createUser from "@/server/mongodb/actions/createUser";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) : Promise<Response> => {
    const {name, age} = await req.json()

    if (!name || !age) {
        return new Response(JSON.stringify({error: "fields name and age are required!"}), {status: 400})
    }

    // create the user in the database
    const newUser = await createUser({name, age});

    if (!newUser) {
        return new Response(JSON.stringify({error: "failed to create user" }), {status: 500});
    }

    return new Response(JSON.stringify({message: "success", id: newUser.data.id_}), {status: 200})
}