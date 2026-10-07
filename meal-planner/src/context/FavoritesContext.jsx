import { createContext} from 'react';
import useLocalStorage from "../hooks/useLocalStorage.jsx";
export const FavoritesContext = createContext(null);
export function FavoriteProvider({children}){
   const {favorites, addFavorites, removeFavorite} = useLocalStorage('');
   return (
       <FavoritesContext.Provider value={{favorites, addFavorites, removeFavorite}}>
           {children}
       </FavoritesContext.Provider>
   );
}