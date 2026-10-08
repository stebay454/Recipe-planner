import {useContext} from 'react'
import {FavoritesContext} from "../context/FavoritesContext.jsx";
export default function RecipeCard({food,handleRecipeClick}) {
    const {favorites, addFavorites,removeFavorite} = useContext(FavoritesContext);
    const isFavorite = favorites.some(fav => fav.idMeal === food.idMeal);
    function handleFavoriteClick(e){
       e.stopPropagation();
      if(isFavorite){
        removeFavorite(food.idMeal);
      } else{
          addFavorites(food);
      }
    }
    return (
        <div className=" rounded cursor-pointer hover:scale-[1.05] transition-transform duration-600 ease
                 py-4 px-2 shadow-[0_7px_16px_rgba(43,33,25,0.08)] border-2 border-[rgba(43,33,25,0.1)]"
                 onClick={() => handleRecipeClick(food.idMeal)}>
             <img src={food.strMealThumb} alt={food.strMeal} className="rounded"/>
             <p className="font-manrope my-4">{food.strMeal} </p>
            <button className="text-sm lg:text-lg bg-yellow-600 hover:scale-[1.05] transition duration-700 ease text-white py-2
                 px-4 rounded mt-auto font-manrope cursor-pointer" onClick={(e) => handleFavoriteClick(e)}>
                 {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
           </button>
        </div>

    );
}
