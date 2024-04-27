"use client"

import React, {useState} from 'react';
import {menuList} from "@/utils/sidebarmenu";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Menu(props) {

	const pathname = usePathname()

	const isActive = (path) => {
		return pathname === path || pathname.startsWith(`${path}/`)
	}

	return (
		<nav>
			{menuList.map((item, index) => (
				<Link
					key={index}
					className={`flex items-center gap-2 py-3 px-4 transition-all rounded ${isActive(item.href) && 'bg-amber-300 text-black'}`}
					href={item.href}
				>
					{item.icon}
					{item.name}
				</Link>
			))}
		</nav>
	);
}

export default Menu;