import React from 'react';
import Link from "next/link";
import {FaPlayCircle} from "react-icons/fa";

function Logo() {
	return (
		<Link href="/" className="flex gap-2 items-center font-bold text-xl uppercase">
			<FaPlayCircle className="text-3xl" />
			{process.env.NEXT_PUBLIC_SITE_NAME}
		</Link>
	);
}

export default Logo;