const baseURL =
	process.env.NODE_ENV === "production"
		? process.env.apiURL
		: "http://localhost:3000";

export const getData = async (slug, limit = null, lang = "en-US", page = null) => {
	const res = await fetch(`${baseURL}/api/${slug}?lang=${lang}${page && `&page=${page}`} `)

	if(!res.ok){
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()

	if(limit !== null) return data.results.slice(0, limit)


	return data
}

export const getMovie = async(id, lang = "en-US") => {
	const res = await fetch(`${baseURL}/api/get-movie?id=${id}&lang=${lang}`)

	if(!res.ok){
		throw new Error('Failed to fetch movie')
	}

	return await res.json()
}

export const getVideo = async(id, lang = "en-US") => {
	const res = await fetch(`${baseURL}/api/get-video?id=${id}&lang=${lang}`)

	if(!res.ok){
		throw new Error('Failed to fetch video')
	}

	return await res.json()
}

export const getCredits = async(id, lang = "en-US") => {
	const res = await fetch(`${baseURL}/api/get-credits?id=${id}&lang=${lang}`)

	if(!res.ok){
		throw new Error('Failed to fetch credits')
	}

	return await res.json()
}

export const getRelated = async(id, lang = "en-US") => {
	const res = await fetch(`${baseURL}/api/get-related?id=${id}&lang=${lang}`)

	if(!res.ok){
		throw new Error('Failed to fetch related movies')
	}

	return await res.json()
}

export const getGenre = async(platform = 'movies', lang = "en-US") => {
	const res = await fetch(`${baseURL}/api/genres?platform=${platform}&lang=${lang}`)

	if(!res.ok){
		throw new Error('Failed to fetch genres')
	}

	return await res.json()
}