"use client"

import React, {useState} from 'react';
import {BiPlay} from "react-icons/bi";
import {MdClose} from "react-icons/md";

function TrailerButton(props) {

	const [trailer, setTrailer] = useState(false)

	return (
		<div>
			<button
				className="flex items-center gap-1 bg-zinc-800/50 py-2 px-4 rounded hover:bg-zinc-800/80 transition-all text-sm"
				onClick={() => setTrailer(!trailer)}
			>
				<BiPlay />
				Play Trailer
			</button>

			{trailer && (
				<div
					className="fixed inset-0 z-20 bg-black/50 flex items-center justify-center cursor-pointer"
					onClick={() => setTrailer(false)}
				>
					<button
						className="bg-white/20 hover:bg-white/30 transition-all w-10 h-10 rounded-full flex items-center justify-center absolute top-10 right-10"

					>
						<MdClose className="text-xl"/>
					</button>
					<div className="w-full max-w-4xl rounded-lg h-[600px] bg-zinc-800 relative">
						<iframe
							className="w-full h-full"
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${props.trailerId}`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default TrailerButton;