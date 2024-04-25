const API_URL = 'https://api.themoviedb.org/3';
const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

export async function searchMovie(query) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
		}
	};

	const data = await fetch(`${API_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
	return data
}

export async function test(){
	const res = process.env.API_ACCESS_TOKEN
	return res
}