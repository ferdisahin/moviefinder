import React from 'react';
import {getApiData} from "@/utils/api";
import ContentSection from "@/components/content-section";
import Pagination from "@/components/pagination";

export const metadata = {
	title: 'Genre',
	description: 'Genre Movies'
}

async function GenrePage({params}) {
	const currentPage = params.id[1] ? Number(params.id[1]) : 1
	const genreId = params.id.length > 0 ? params.id[0] : params.id
	const items = await getApiData('discover', 'movie', null, null, currentPage, null, genreId)

	const totalPage = items.total_pages < 500 ? items.total_pages : 500

	const prevPageNumber = currentPage - 1
	const nextPageNumber = currentPage + 1

	const slugName = params.id.length > 0 ? `genre/${params.id[0]}` : params.id

	if(currentPage < 1 || currentPage > 500 || isNaN(currentPage)){
		throw new Error('Not Found')
	}

	return (
		<div className="space-y-10">
			<ContentSection title="" items={items.results} grid="5" />

			<Pagination
				currentPage={currentPage}
				totalPage={totalPage}
				prevPageNumber={prevPageNumber}
				nextPageNumber={nextPageNumber}
				slugName={slugName}
			/>
		</div>
	);
}

export default GenrePage;