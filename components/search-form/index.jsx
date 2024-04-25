"use client"

import React, {useEffect, useState} from 'react';
import {FaSearch, FaStar} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {getYear} from "@/utils/functions";
import {VscLoading} from "react-icons/vsc";
import {usePathname, useRouter} from "next/navigation";

function SearchForm(){
	const pathname = usePathname()

	const [searchResult, setSearchResult] = useState([])
	const [loading, setLoading] = useState(false)

	const getMovies = async (query) => {
		setLoading(true)
		const res = await fetch(`http://localhost:3000/api/search?q=${query}`)
		const data = await res.json()
		setSearchResult(data.results.slice(0,5))
		setLoading(false)
	}

	useEffect(() => {
		setSearchResult([])
	}, [pathname])


	return (
		<div className="relative">
			<div className="my-5 flex bg-white/10 rounded items-center px-2 gap-3">
				{loading ? (
					<VscLoading className="text-white/50 animate-spin" />
				) : (
					<FaSearch className="text-white/50"/>
				)}
				<input
					type="text"
					className="w-full bg-transparent h-10 text-sm !ring-0 !outline-none"
					placeholder="Search Movies or TV Series"
					onChange={(e) => getMovies(e.currentTarget.value)}
				/>
			</div>
			{searchResult.length > 0 && (
				<div className="absolute top-full left-0 right-0 bg-gray-800 rounded p-3">
					<div className="text-xs uppercase text-zinc-400 font-bold mb-1">Search Results</div>
					<div>
						{searchResult.map((item, index) => (
							<Link key={index} href={`/detail/${item.id}`} className="flex items-center gap-3 p-2 hover:bg-gradient-to-r hover:from-gray-900 hover:to-transparent transition-all rounded">
								<div className="w-10 h-10 relative">
									{item.poster_path ? (
										<Image
											fill
											unoptimized
											src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
											alt={item.title}
											className="object-cover w-full h-full rounded"
										/>
									) : (
										<div className="bg-gray-700 w-full h-full rounded" />
									)}
								</div>
								<div>
									<div className="flex items-center gap-1">
										{item?.title}
										<div className="text-sm">({getYear(item.release_date)})</div>
									</div>
									<div className="flex items-center gap-1 text-sm"><FaStar className="text-xs text-yellow-400" /> {item?.vote_average?.toFixed(1)}</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default SearchForm;