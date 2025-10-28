
import { NextRequest } from "next/server";


export const POST = async (req: NextRequest): Promise<Response> => {
    const {pokemon1, pokemon2} = await req.json()

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`)

    if (!res.ok) {
        return new Response(JSON.stringify({message: 'field pokemon1 is not a valid pokemon!'}), { status: res.status });
    }

    const rb1 = await res.json()

    const stat1 = rb1.stats.filter((s : any) => s.stat.name === 'hp')[0].base_stat

    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`)

    if (!res2.ok) {
        return new Response(JSON.stringify({message: 'field pokemon2 is not a valid pokemon!'}), { status: res2.status });
    }

    const rb2 = await res2.json()
    const stat2 = rb2.stats.filter((s : any) => s.stat.name === 'hp')[0].base_stat

    let respBody;
    if (stat1 < stat2) {
        respBody = {winner: rb1.name}
    } else {
        respBody = {winner: rb2.name}
    }
    return new Response(JSON.stringify(respBody), {status: res2.status})
};