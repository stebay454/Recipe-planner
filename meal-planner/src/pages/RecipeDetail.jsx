import RecipeCard from "../components/RecipeCard.jsx";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import IngredientList from "../components/IngredientList.jsx";
import InstructionsBlock from "../components/InstructionsBlock.jsx";
export default function RecipeDetail() {
    const {id} = useParams();
    const {meal,loading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(loading) return <p className='text-center font-manrope mt-auto text-xl'>Loading recipe...</p>
    if(error) return <div>a network error happened!</div>;
    return (
        <div className='h-screen flex justify-center items-center py-6 px-6'>
            <div className='w-full bg-yellow-600 flex flex-col py-16 px-16'>
                <p className="text-center font-manrope mt-auto text-sm">YOUR CHOICE.</p>
                <div className='flex items-center justify-start'>
                    {meal &&
                        <>
                            <RecipeCard meal={meal?.meals?.[0]}/>
                            <IngredientList meal={meal?.meals?.[0]}/>
                            <InstructionsBlock />
                        </>
                    }
                </div>
            </div>
        </div>
    );
}