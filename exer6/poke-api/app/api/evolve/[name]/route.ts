import { NextRequest } from "next/server";


export const GET = async (req: NextRequest, { params }: { params: Promise<{ name: string }> }): Promise<Response> => {
    const { name } = await params

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

	if (!res.ok) {
		return new Response(res.body, { status: res.status });
	}

    const rb = await res.json()
    const pokeId = rb.id;

    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`)

    if (!res2.ok) {
        return new Response(res2.body, { status: res2.status });
    }

    const rb2 = await res2.json()
    const evoUrl = rb2.evolution_chain.url

    const res3 = await fetch(evoUrl)

    if (!res3.ok) {
        return new Response(res3.body, { status: res3.status });
    }

    const rb3 = await res3.json()
    let curr_evo = rb3.chain;

    console.log('Current evolution ', curr_evo)

    while (curr_evo.species.name !== name) {
        if (curr_evo.evolves_to.length == 0) { // pokemon is fully evolved
            return new Response(JSON.stringify(curr_evo), { status: res.status, headers: { 'Content-Type': 'application/json' } });
        }
        curr_evo = curr_evo.evolves_to[0]
    }
    

	return new Response(JSON.stringify(curr_evo.evolves_to[0]), { status: res.status, headers: { 'Content-Type': 'application/json' } });
};