import React from 'react';
import Featured from "@/components/featured";
import ContentSection from "@/components/content-section";

import {getApiData} from "@/utils/api";

async function Page() {
	const [featured, popular, topRated] = await Promise.all([
		getApiData('movie', 'popular', null,6),
		getApiData('movie', 'popular', null,12),
		getApiData('movie', 'top_rated', null,12)
	])

	return (
		<div className="space-y-10 h-svh overflow-y-auto no-scrollbar pb-10">
			<Featured items={featured.slice(3)} />
			<ContentSection title="Popular" items={popular} />
			<ContentSection title="Top Rated" items={topRated} />
		</div>
	);
}

export default Page;