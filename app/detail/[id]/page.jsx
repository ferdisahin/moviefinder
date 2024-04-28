import React from 'react';
import {getApiData} from "@/utils/api";
import FeaturedDetail from "@/components/featured-detail";
import Crew from "@/components/crew";
import ContentSection from "@/components/content-section";

export const metadata = {}

async function DetailPage({params}) {
	const [movie, credits, related] = await Promise.all([
		getApiData('movie', '', params.id, null),
		getApiData('movie', 'credits', params.id, null),
		getApiData('movie', 'similar', params.id, 6)
	])

	metadata.title = movie.title
	metadata.description = `${movie.overview.substring(0, 120)}...`;
	return (
		<div className="space-y-5">
			<FeaturedDetail movie={movie} />
			<Crew credits={credits.cast.slice(0,7)} />
			<ContentSection title="Similar" items={related} />
		</div>
	);
}

export default DetailPage;