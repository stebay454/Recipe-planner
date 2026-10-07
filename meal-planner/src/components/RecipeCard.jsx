import {useState, useContext} from 'react'
import {FavoritesContext} from "../context/FavoritesContext.jsx";
export default function RecipeCard({meal,handleRecipeClick}) {
    const [add,setAdd] = useState(false);
    const {favorites, addFavorites,removeFavorite} = useContext(FavoritesContext);
    function handleFavoriteClick(e,food){
       e.stopPropagation();
       addFavorites(food);
    }
    const recipes = meal?.meals ? meal.meals : [meal];
    return (
        <div className="grid grid-cols-4 gap-4">
            {meal && recipes.map(food => (
                <div key={food.idMeal} className=" rounded cursor-pointer hover:scale-[1.05] transition-transform duration-600 ease
                 py-4 px-2 shadow-[0_7px_16px_rgba(43,33,25,0.08)] border-2 border-[rgba(43,33,25,0.1)]" onClick={() => handleRecipeClick(food.idMeal)}>
                    <img src={food.strMealThumb} alt='some food' className="rounded"/>
                    <p className="font-manrope my-4">{food.strMeal} </p>
                    <button className=" bg-[#b8654a] hover:bg-[#9c553e] transition duration-700 ease text-white py-2 px-4 rounded mt-auto font-manrope cursor-pointer" onClick={(e) =>handleFavoriteClick(e,food)}>Add to Favorite</button>
                </div>
            ))}
        </div>
    );
}