import {useNavigate} from 'react-router-dom';
import useFetch from "../hooks/useFetch.jsx";
import {useState} from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

export default function Browse(){
    const navigate = useNavigate();
    const [input,setInput] = useState("");
    const [url,setUrl] = useState("");
    const {meal,loading,error} = useFetch(url);
    function handleClick(){
        let newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
     setUrl(newUrl);
    }
    function handleChange(e) {
        setInput(e.target.value.trim());
    }
    function handleFilter(filterUrl){
        setUrl(filterUrl);
    }
    function handleRecipeClick(key){
      navigate(`/recipe/${key}`);
    }
    const recipes = meal?.meals ? meal.meals : [meal];
    if(loading) return <p className='text-center font-manrope my-auto text-xl'>Loading...</p>;
    if(error) return <p className='text-center font-manrope  text-xl'>A Network Error happened!</p>;
    return (
        <div className='text-center mt-6 font-manrope'>
         <input  type='text' name='meal' onChange={handleChange} placeholder='honey' className='px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
           focus:outline-none  focus:ring-1 focus:ring-[#6e7353]'/>
         <button onClick={handleClick} className="bg-[#6e7353] hover:scale-[1.05] transition duration-700 ease text-white py-2 px-4 rounded mt-auto ml-6 cursor-pointer">Search</button>
            <CategoryFilter onSelect={handleFilter} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                {meal && recipes.map(food => (
                    <RecipeCard key={food.idMeal} food={food} handleRecipeClick={handleRecipeClick}/>
                ))}
            </div>
        </div>
    );
}