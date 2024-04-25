import {RiHome7Line} from "react-icons/ri";
import {AiOutlineFire, AiOutlineRise} from "react-icons/ai";
import {BiBoltCircle} from "react-icons/bi";

const menuList = [
	{name: "Home", href: "/", icon: <RiHome7Line className="w-5 h-5" />},
	{name: "Popular", href: "/popular", icon: <AiOutlineFire className="w-5 h-5" />},
	{name: "Top Rated", href: "/top-rated", icon: <AiOutlineRise className="w-5 h-5" />},
	{name: "Upcoming", href: "/upcoming", icon: <BiBoltCircle className="w-5 h-5" />},
]

export {menuList};