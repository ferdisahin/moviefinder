const API_URL = 'https://api.themoviedb.org/3';

export async function GET(req, {params}){
	const slug = params.slug
	const url =  req.nextUrl.searchParams
	const action = url.get('q')

	let res = {ok: false, message: 'Invalid route'}

	if(slug === 'search'){
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
			}
		};

		res = await fetch(`${API_URL}/search/movie?query=${action}&include_adult=false&language=en-US&page=1`, options)
		res = await res.json()
	}

	return Response.json(res)
}