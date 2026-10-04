import useFetch from "../hooks/useFetch.jsx";
import {useState} from "react";

export default function Browse(){
    const [input,setInput] = useState("");
    const [url,setUrl] = useState("");
    const {meal,loading,error} = useFetch(url);
    function handleClick(){
        let newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
     setUrl(newUrl);
    }
    function handleChange(e) {
        setInput(e.target.value);
    }
    if(loading) return <div>Loading...</div>;
    if(error) return <div>a network error happened!</div>;
    return (
        <div>
         <input  type='text' name='meal' onChange={handleChange} placeholder='Lazagna' />
         <button onClick={handleClick}>Search</button>
            {meal && meal.meals.map(food =>(
                <div key={food.idMeal}>
                    <img src={food.strMealThumb} alt='some food' />
                    <p>{food.strMeal}</p>
                </div>
            ))}
        </div>
    );
}