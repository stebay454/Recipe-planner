import {Outlet} from 'react-router-dom';
import NavBar from "./components/NavBar.jsx";
import {FavoriteProvider} from "./context/FavoritesContext.jsx";
export default function App(){
    return (
        <div className="w-full min-h-screen bg-linear-[100deg] from-[#f5f5f5] to-[#dcdcdc]">
            <FavoriteProvider>
                <NavBar />
                <Outlet />
            </FavoriteProvider>
        </div>
    );
}

