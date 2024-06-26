export function getYear(date){
	const fullDate = new Date(date)
	return fullDate.getFullYear()
}

export function daysLater(date){
	const currentDate = new Date()
	const releaseDate = new Date(date)
	const diffTime = Math.abs(releaseDate - currentDate)
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
	return `${diffDays} days later`
}

export function getTime(minutes){
	const hours = Math.floor(minutes / 60)
	const remainingTime = minutes % 60
	return `${hours}h ${remainingTime}m`
}