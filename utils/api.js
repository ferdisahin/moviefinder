export async function getApiData(pageName = "", type = "movie", id = null, limit = null, page = 1){
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
		}
	};
	pageName = pageName ? `${pageName}` : ''
	id = id ? `/${id}` : ''
	type = type ? `/${type}` : ''

	const res = await fetch(`https://api.themoviedb.org/3/${pageName}${id}${type}?language=en&page=${page}`, options)

	if(!res.ok){
		throw new Error('Failed to fetch data')
	}

	if(limit !== null) return (await res.json()).results.slice(0, limit)

	return res.json()
}