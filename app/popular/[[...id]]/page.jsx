import React from 'react';
import {getData} from "@/utils/api";
import ContentSection from "@/components/content-section";
import {Button} from "@/components/ui/button"
import Link from "next/link";
import Pagination from "@/components/pagination";

export const metadata = {
	title: 'Popular',
	description: 'Popular movies'
}

async function Popular({params}) {
	const popular = await getData('popular', null, '', params.id)

	const currentPage = params.id ? Number(params.id) : 1
	const totalPage = popular.total_pages < 500 ? popular.total_pages : 500

	const prevPageNumber = currentPage - 1
	const nextPageNumber = currentPage + 1

	if(currentPage < 1 || currentPage > 500 || isNaN(currentPage)){
		throw new Error('Not Found')
	}

	return (
		<div className="space-y-10">
			<ContentSection title="Popular" items={popular.results} grid="5" />

			<Pagination
				currentPage={currentPage}
				totalPage={totalPage}
				prevPageNumber={prevPageNumber}
				nextPageNumber={nextPageNumber}
				slugName="popular"
			/>
		</div>
	);
}

export default Popular;