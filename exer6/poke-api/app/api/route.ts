

type PokePaginatedResponse = {
    ok: boolean;
    body: BodyInit;
    status: number;
    results: Array<{name: string, url: string}>
}

export const GET = async (req: Request): Promise<Response> => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${Math.floor(Math.random() * 10)}`)

	if (!res.ok) {
		return new Response(res.body, { status: res.status });
	}

    const rb = await res.json()

    const reqUrl = rb.results[0].url

    const res2 = await fetch(reqUrl)
    if (!res2.ok) {
        return new Response(res2.body, { status: res2.status });
    }
	return new Response(res2.body, { status: res2.status, headers: { 'Content-Type': 'application/json' } });
};