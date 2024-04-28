import React from 'react';
import {getApiData} from "@/utils/api";
import ContentSection from "@/components/content-section";
import Pagination from "@/components/pagination";

export const metadata = {
	title: 'Top Rated',
	description: 'Top Rated movies'
}

async function TopRatedPage({params}) {
	const items = await getApiData('movie', 'top_rated', null, null, params.page)

	const currentPage = params.page ? Number(params.page) : 1
	const totalPage = items.total_pages < 500 ? items.total_pages : 500

	const prevPageNumber = currentPage - 1
	const nextPageNumber = currentPage + 1

	if(currentPage < 1 || currentPage > 500 || isNaN(currentPage)){
		throw new Error('Not Found')
	}

	return (
		<div className="space-y-10">
			<ContentSection title="Top Rated" items={items.results} grid="5" />

			<Pagination
				currentPage={currentPage}
				totalPage={totalPage}
				prevPageNumber={prevPageNumber}
				nextPageNumber={nextPageNumber}
				slugName="top-rated"
			/>
		</div>
	);
}

export default TopRatedPage;