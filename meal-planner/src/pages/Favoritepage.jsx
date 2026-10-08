import {FaArrowLeft} from 'react-icons/fa';
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
    function handleBackClick(){
        navigate(-1);
    }
    return (
        <div className='w-full text-center py-6 px-6 font-manrope'>
            <div className='flex items-center my-6 justify-around'>
                <button onClick={handleBackClick} aria-label='navigate backward'><FaArrowLeft className='mr-auto cursor-pointer text-xl'/></button>
                <p className='text-xl mx-auto'>YOUR FAVORITE MEALS</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                {favorites.map(food => (
                    <RecipeCard key={food.idMeal} food={food} handleRecipeClick={handleRecipeClick} />
                ))}
            </div>
        </div>
    );
}