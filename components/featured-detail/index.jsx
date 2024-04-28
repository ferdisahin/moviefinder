import React from 'react';
import Image from "next/image";
import {getTime} from "@/utils/functions";
import TrailerButton from "@/components/featured-detail/trailer-button";
import {getApiData} from "@/utils/api";

async function FeaturedDetail({movie}) {
	const trailer = await getApiData('movie', 'videos', movie.id)
	const trailerId = trailer.results.find(item => item.type === "Trailer")

	return (
		<div
			className="h-80 relative rounded-lg overflow-auto bg-gray-800 !bg-center before:absolute before:inset-0 before:z-10 before:bg-black/25 before:backdrop-blur-sm p-5"
			style={{background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`}}>
			<div className="grid grid-cols-12 relative z-20 h-full gap-5">
				<div className="col-span-3 3xl:col-span-2">
					<div className="relative h-full">
						<Image className="rounded-lg object-cover"
							   src={`https://media.themoviedb.org/t/p/w300/${movie.poster_path}`} alt={movie.name}
							   fill/>
					</div>
				</div>
				<div className="col-span-9">
					<div className="space-y-3">
						<div className="text-3xl font-bold">{movie.title}</div>
						<div className="text-sm text-zinc-200">{movie.release_date} - {getTime(movie.runtime)}</div>
						<div>
							<div className="font-bold uppercase text-xs text-white/50 mb-1">Overview</div>
							<div className="line-clamp-4">{movie.overview}</div>
						</div>
						{trailerId && (
							<TrailerButton trailerId={trailerId.key} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedDetail;