import React from 'react';
import {getCredits, getMovie, getRelated} from "@/utils/api";
import Image from "next/image";

import {getTime} from "@/utils/functions";
import FeaturedDetail from "@/components/featured-detail";
import Crew from "@/components/crew";
import ContentSection from "@/components/content-section";

export const metadata = {}

async function DetailPage({params}) {
	const [movie, credits, related] = await Promise.all([
		getMovie(params.id),
		getCredits(params.id),
		getRelated(params.id)
	])

	metadata.title = movie.title
	metadata.description = `${movie.overview.substring(0, 120)}...`;
	return (
		<div className="space-y-5">
			<FeaturedDetail movie={movie} />
			<Crew credits={credits} />
			<ContentSection title="Similar" items={related} />
		</div>
	);
}

export default DetailPage;