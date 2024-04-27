import React from 'react';
import Link from "next/link";

function Pagination({currentPage, totalPage, prevPageNumber, nextPageNumber, slugName}){
	return (
		<div>
			{totalPage > 1 && (
				<div className="flex justify-between">
					<Link
						href={`/${slugName}/${prevPageNumber}`}
						className={`bg-gray-800 hover:bg-gray-700 py-2 px-4 text-sm rounded transition-all ${(isNaN(currentPage) || currentPage === 1) && 'pointer-events-none opacity-50'}`}>
						Previous
					</Link>

					<Link
						href={`/${slugName}/${nextPageNumber}`}
						className={`bg-gray-800 hover:bg-gray-700 py-2 px-4 text-sm rounded transition-all ${currentPage === totalPage && 'pointer-events-none opacity-50'}`}>
						Next
					</Link>
				</div>
			)}
		</div>
	);
}

export default Pagination;