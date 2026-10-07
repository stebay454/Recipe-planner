import {useState, useEffect} from 'react';
const useLocalStorage = () => {
    const [favorites,setFavorites] = useState(()=>{
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites]);
    function addFavorites(meal){
        setFavorites(prev => [...prev, meal]);
    }
    function removeFavorite(id){
        setFavorites(prev => prev.filter(m=> m.idMeal !== id));
    }
    return {favorites,addFavorites,removeFavorite};
}
export default useLocalStorage;