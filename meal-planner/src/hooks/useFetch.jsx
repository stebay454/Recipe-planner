import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
        if(!url) return;
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}`);
                if(!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setMeal(result);
            } catch(error){
               setError('error fetching data');
            } finally {
              setLoading(false);
            }
        }
        setLoading(true);
        fetchData();
    },[url])
    return {meal,loading,error};
}
export default useFetch;