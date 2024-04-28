"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

function Dropdown({movies}) {

	const pathname = usePathname()

	return (

		<div>
			{
				movies?.genres?.map((item, index) => (
					<Link
						key={index}
						href={`/genre/${item.id}`}
						className={`block py-2 px-4 transition-all rounded ${pathname === `/genre/${item.id}` ? 'bg-amber-300 text-black' : 'hover:bg-white/10'}`}
					>
						{item.name}
					</Link>
				))
			}
		</div>

/*		<div className="flex flex-col">
			<div>
				<button
					className={`text-left py-2 px-4 rounded flex items-center w-full ${activeMenu === 'movies' && 'bg-gray-800'}`}
					onClick={() => setActiveMenu(activeMenu === 'movies' ? '' : 'movies')}>
					Movies
					<IoIosArrowDown
						className={`w-4 h-4 ml-auto transition-all ${activeMenu === 'movies' && 'rotate-180'}`}/>
				</button>

				{activeMenu === "movies" && (
					<div>
						{
							movies?.genres?.map((item, index) => (
								<Link
									key={index}
									href={`/genre/${item.id}`}
									className={`block py-2 px-4 transition-all rounded ${pathname === `/genre/${item.id}` && 'bg-amber-300 text-black'}`}
								>
									{item.name}
								</Link>
							))
						}
					</div>
				)}
			</div>

			<div>
				<button
					className={`text-left py-2 px-4 rounded flex items-center w-full ${activeMenu === 'tv' && 'bg-gray-800'}`}
					onClick={() => setActiveMenu(activeMenu === 'tv' ? '' : 'tv')}>
					TV Series
					<IoIosArrowDown
						className={`w-4 h-4 ml-auto transition-all ${activeMenu === 'tv' && 'rotate-180'}`}/>
				</button>

				{activeMenu === "tv" && (
					<div>
						{
							tvs?.genres.map((item, index) => (
								<Link
									key={index}
									href={`/genre/${item.id}`}
									className={`block py-2 px-4 transition-all rounded ${pathname === `/genre/${item.id}` && 'bg-amber-300 text-black'}`}
								>
									{item.name}
								</Link>
							))
						}
					</div>
				)}
			</div>
		</div>*/
	);
}

export default Dropdown;