import React from 'react';
import Image from "next/image";

function Page({params}) {
	return (
		<div>
			<div className="grid grid-cols-3 gap-3">
				<div className="relative h-[500px] before:bg-gradient-to-t before:from-black/80 before:to-transparent before:absolute before:inset-0 before:z-10 rounded-lg overflow-hidden">
					<Image className="object-cover" src="https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg" alt="" fill unoptimized />
					<div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-3">
						<div className="text-xl font-bold">Dune: Part Two</div>
						<div className="line-clamp-3 text-gray-200">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consectetur cumque doloremque dolores ducimus facere inventore natus porro, quibusdam reiciendis soluta ullam unde? Ab aliquid eum laborum ut voluptate.
						</div>
						<div>

						</div>
					</div>
				</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
}

export default Page;