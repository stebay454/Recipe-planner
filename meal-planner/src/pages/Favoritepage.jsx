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
                <FaArrowLeft className='mr-auto cursor-pointer text-xl' onClick={handleBackClick}/>
                <p className='text-xl mr-auto'>YOUR FAVORITE MEALS</p>
            </div>
          <RecipeCard meal={{meals : favorites}} handleRecipeClick={handleRecipeClick} />
        </div>
    );
}