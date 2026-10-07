import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {FavoritesContext} from "../context/FavoritesContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
export default function FavoritePage() {
    const navigate = useNavigate();
    const {favorites, addFavorites,removeFavorite} = useContext(FavoritesContext);
    function handleRecipeClick(key){
        navigate(`/recipe/${key}`);
    }
    return (
        <div className='w-full text-center py-6 px-6 font-manrope'>
            <p className='my-6 text-xl'>YOUR FAVORITE MEALS</p>
          <RecipeCard meal={{meals : favorites}} handleRecipeClick={handleRecipeClick} />
        </div>
    );
}