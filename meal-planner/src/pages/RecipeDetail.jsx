import RecipeCard from "../components/RecipeCard.jsx";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import IngredientList from "../components/IngredientList.jsx";
import {useState} from "react";
export default function RecipeDetail() {
    const {id} = useParams();
    const {meal,loading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(loading) return <p className='text-center font-manrope mt-auto text-xl'>Loading recipe...</p>
    if(error) return <div>a network error happened!</div>;
    return (
        <div className='h-scrren w-full bg-yellow-600 flex flex-cols'>
            <div className='flex-1'>
                <p className="text-center font-manrope mt-auto text-sm">YOUR CHOICE.</p>
                {meal && <RecipeCard meal={meal}/>}
            </div>
            <IngredientList meal={meal}/>
        </div>
    );
}