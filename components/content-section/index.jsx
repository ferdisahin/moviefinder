import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {getYear} from "@/utils/functions";

async function ContentSection(props) {

	const grid = props.grid ?? 6

	return (
		<div>
			<div className="text-xl font-medium text-zinc-300">{props.title ?? 'Title'}</div>
			<div className={`grid grid-cols-${grid} mt-3 gap-x-3 gap-y-6`}>
				{props.items?.map((item, index) => (
					<Link href={`/detail/${item.id}`} key={index} className="group space-y-1">
						<div className="h-60 relative rounded-md overflow-hidden bg-gray-500">
							{item.poster_path && (
							<Image
								className="absolute inset-0 object-cover transition-all"
								src={`https://media.themoviedb.org/t/p/w300/${item.poster_path}`}
								alt=""
								fill
							/>
						)}
						</div>
						<div className="space-y-1">
							<div className="line-clamp-1 font-medium">{item.title}</div>
							<div className="text-sm text-zinc-400">{ getYear(item.release_date) }</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ContentSection;