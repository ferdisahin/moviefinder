import React from 'react';

function Title({children}) {
	return (
		<div className="text-sm text-zinc-400 font-bold uppercase pl-4">{children}</div>
	);
}

export default Title;