const API_URL = 'https://api.themoviedb.org/3';

export async function GET(req, {params}){
	const slug = params.slug
	const url =  req.nextUrl.searchParams
	const action = url.get('q')
	const lang = url.get('lang')
	const id = url.get('id')
	const page = url.get('page') ?? 1
	const platform = url.get('platform')

	let res = {ok: false, message: 'Invalid route'}

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
		}
	};

	if(slug === 'search'){
		res = await fetch(`${API_URL}/search/movie?query=${action}&include_adult=false&language=${lang}`, options)
		res = await res.json()
	}else if(slug === "featured"){
		res = await fetch(`${API_URL}/discover/movie?language=${lang}&page=1`, options)
		res = await res.json()
/*
		const sortedData = res.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
		const filteredData = sortedData.filter(item => new Date(item.release_date) >= new Date())

		res = filteredData.slice(0,2)*/
	}else if(slug === "popular"){
		res = await fetch(`${API_URL}/movie/popular?language=${lang}&page=${page}`, options)
		res = await res.json()
	}else if(slug === "top-rated"){
		res = await fetch(`${API_URL}/movie/top_rated?language=${lang}&page=${page}`, options)
		res = await res.json()
	}else if(slug === "get-movie"){
		res = await fetch(`${API_URL}/movie/${id}?language=${lang}`, options)
		res = await res.json()
	}else if(slug === "get-video"){
		res = await fetch(`${API_URL}/movie/${id}/videos?language=${lang}`, options)
		res = await res.json()
	}else if(slug === "get-credits"){
		res = await fetch(`${API_URL}/movie/${id}/credits?language=${lang}`, options)
		res = await res.json()
		res = res.cast.slice(0, 7)
	}else if(slug === "get-related"){
		res = await fetch(`${API_URL}/movie/${id}/similar?language=${lang}&page=1`, options)
		res = await res.json()
		res = res.results.slice(0, 6)
	}else if(slug === "upcoming"){
		res = await fetch(`${API_URL}/movie/upcoming?language=${lang}&page=${page}`, options)
		res = await res.json()
	}else if(slug === "genres"){
		res = await fetch(`${API_URL}/genre/${platform}/list?language=${lang}`, options)
		res = await res.json()
	}

	return Response.json(res)
}