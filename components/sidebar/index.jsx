'use client'

import React, {useState} from 'react';
import Logo from "@/components/sidebar/logo";
import Link from "next/link";

import {usePathname} from 'next/navigation'
import Title from "@/components/sidebar/title";

import Genres from "@/mocks/genres.json";
import {IoIosArrowDown, IoMdArrowDown} from "react-icons/io";

import {menuList} from "@/utils/sidebarmenu";

function Sidebar() {
    const pathname = usePathname()
    const [activeMenu, setActiveMenu] = useState('')

    return (
        <div className="w-80 p-5">
            <Logo />

            <div className="mt-10 space-y-3">
                <Title>Menu</Title>

                <nav>
                    {menuList.map((item, index) => (
                        <Link
                            key={index}
                            className={`flex items-center gap-2 py-3 px-4 transition-all rounded ${pathname === item.href && 'bg-amber-300 text-black'}`}
                            href={item.href}
                            >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="mt-10 space-y-3">
                <Title>Categories</Title>

                <nav className="flex flex-col">
                    <div>
                        <button className={`text-left py-2 px-4 rounded flex items-center w-full ${activeMenu === 'movies' && 'bg-gray-800'}`} onClick={() => setActiveMenu(activeMenu === 'movies' ? '' : 'movies')}>
                            Movies
                            <IoIosArrowDown className={`w-4 h-4 ml-auto transition-all ${activeMenu === 'movies' && 'rotate-180'}`} />
                        </button>

                        {activeMenu === "movies" && (
                            <div>
                                {
                                    Genres.genres.map((item, index) => (
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
                            <IoIosArrowDown className={`w-4 h-4 ml-auto transition-all ${activeMenu === 'tv' && 'rotate-180'}`} />
                        </button>

                        {activeMenu === "tv" && (
                            <div>
                                {
                                    Genres.genres.map((item, index) => (
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
                </nav>
            </div>

        </div>
    );
}

export default Sidebar;