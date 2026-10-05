import useFetch from "../hooks/useFetch.jsx";
import {useState} from "react";
import CategoryFilter from "../components/CategoryFilter.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

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
    function handleFilter(filterUrl){
        setUrl(filterUrl);
    }
    if(loading) return <div>Loading...</div>;
    if(error) return <div>a network error happened!</div>;
    return (
        <div>
         <input  type='text' name='meal' onChange={handleChange} placeholder='Lazagna' />
         <button onClick={handleClick} className="bg-[#c66a45] text-white py-2 px-4 rounded mt-auto">Search</button>
            <CategoryFilter onSelect={handleFilter} />
            <RecipeCard meal={meal}/>
        </div>
    );
}