import React from 'react';
import Image from "next/image";
import Featured from "@/components/featured";
import ContentSection from "@/components/content-section";
import {getCredits, getData} from "@/utils/api";

async function Page({params}) {

	const [
		featured,
		popular,
		topRated
	] = await Promise.all([
		getData('featured', 6),
		getData('popular', 12),
		getData('top-rated', 12)
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