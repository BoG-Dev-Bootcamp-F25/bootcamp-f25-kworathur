import { NextRequest } from "next/server";


export const GET = async (req: NextRequest, { params }: { params: Promise<{ name: string }> }): Promise<Response> => {
    const { name } = await params

    const res = await fetch(`https://pokeapi.co/api/v2/type/${name}`)

    if (!res.ok) {
        return new Response(res.body, { status: res.status });
    }

    const rb = await res.json()
    const pokemonForType = rb.pokemon.map((p: any) => p.pokemon);

    return new Response(JSON.stringify(pokemonForType), { status: res.status, headers: { 'Content-Type': 'application/json' } });
};