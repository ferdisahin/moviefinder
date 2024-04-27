import React from 'react';
import Image from "next/image";

function Crew({credits}) {
	return (
		<div className="space-y-5">
			<div className="text-xl font-medium text-zinc-300">Crew</div>
			<div className="grid grid-cols-7 gap-5">
				{credits?.map((person, index) => (
					<div key={index} className="space-y-2">
						<div className="w-full h-40 relative">
							{person.profile_path && (
								<Image
									className="rounded-lg object-cover"
									src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${person.profile_path}`}
								   	alt={person.name}
								   	fill
								/>
							)}
						</div>
						<div className="space-y-1">
							<div className="text-sm font-bold">{person.name}</div>
							<div className="text-xs text-zinc-200">{person.character}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Crew;