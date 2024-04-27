import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {daysLater} from "@/utils/functions";

function Card(props) {
	const item = props.item
	return (
		<Link href={`/detail/${item.id}`}
			className="relative h-[500px] before:bg-gradient-to-t before:from-black/80 before:to-transparent before:absolute before:inset-0 before:z-10 rounded-lg overflow-hidden hover:before:opacity-50 before:transition-all group">
			<Image className="object-cover group-hover:scale-110 transition-all duration-500"
				   src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${item.backdrop_path}`}
				   alt="" fill />
			<div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-3">
				<div className="text-xl font-bold">{item.title}</div>
				<div className="line-clamp-3 text-gray-200">
					{item.overview}
				</div>
{/*				<div className="text-xs uppercase font-semibold">
					{daysLater(item.release_date)}
				</div>*/}
			</div>
		</Link>
	);
}

export default Card;