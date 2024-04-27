import React from 'react';
import Card from "@/components/featured/card";
import {getData} from "@/utils/api";

async function Featured(props) {
	return (
		<div className="grid grid-cols-3 gap-3">
			{props.items?.map((item, index) => (
				<Card key={index} item={item} />
			))}
		</div>
	);
}

export default Featured;