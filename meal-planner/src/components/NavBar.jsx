import {Link} from "react-router-dom";
import {FavoritesContext} from "../context/FavoritesContext.jsx";
import {useContext} from "react";
export default function NavBar() {
    const {favorites, addFavorites,removeFavorite} = useContext(FavoritesContext);
  return(
      <div className="bg-white rounded flex justify-around items-center py-6 px-6">
          <p className='text-[#6e7353] font-manrope text-4xl ml-4'>RECIPE PLANNER</p>
          <nav className='flex gap-6'>
              <Link to="/" className='font-manrope'>HOME</Link>
              <Link to="/Favorite" className='font-manrope'>FAVORITES({favorites.length})</Link>
          </nav>
      </div>
  );
};