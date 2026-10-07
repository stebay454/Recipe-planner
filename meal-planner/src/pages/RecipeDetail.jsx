import RecipeCard from "../components/RecipeCard.jsx";
import {useParams, useNavigation, useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import IngredientList from "../components/IngredientList.jsx";
import InstructionsBlock from "../components/InstructionsBlock.jsx";
import {FaArrowLeft} from "react-icons/fa";
export default function RecipeDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {meal,loading,error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    function handleBackClick() {
        navigate(-1);
    }
    if(loading) return <p className='text-center font-manrope mt-auto text-xl'>Loading recipe...</p>
    if(error) return <div>a network error happened!</div>;
    return (
        <div className='flex flex-col justify-center items-start py-6 px-6'>
            <FaArrowLeft className='my-6 cursor-pointer text-xl' onClick={handleBackClick}/>
            <div className='w-full shadow-[0_7px_16px_rgba(43,33,25,0.08)] border-2 border-[rgba(43,33,25,0.3)] flex flex-col py-6 px-6'>
                <p className="text-center font-manrope text-sm">YOUR CHOICE.</p>
                    {meal &&
                        <div className=' w-full flex flex-col items-center gap-6 py-6'>
                            <div className='w-full'>
                                <RecipeCard meal={meal?.meals?.[0]}/>
                            </div>
                            <div className='w-full flex flex-col gap-4'>
                            <IngredientList meal={meal?.meals?.[0]}/>
                            <InstructionsBlock meal={meal?.meals?.[0]}/>
                            </div>
                        </div>
                    }
            </div>
        </div>
    );
}