import Logo from "@/components/sidebar/logo";
import Title from "@/components/sidebar/title";
import Dropdown from "@/components/sidebar/dropdown";
import Menu from "@/components/sidebar/menu";

import {getApiData} from "@/utils/api";

async function Sidebar() {
    const movies = await getApiData('genre', 'movie/list')

    return (
        <div className="w-80 p-5">
            <Logo />

            <div className="mt-10 space-y-3">
                <Title>Menu</Title>
                <Menu />
            </div>

            <div className="mt-10 space-y-3">
                <Title>Categories</Title>
                <Dropdown movies={movies} />
            </div>
        </div>
    );
}
export default Sidebar;