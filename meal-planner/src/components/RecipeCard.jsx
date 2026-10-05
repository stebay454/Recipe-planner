export default function RecipeCard({meal}) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {meal && meal.meals.map(food => (
                <div key={food.idMeal} className=" rounded cursor-pointer hover:scale-[1.05] transition-transform duration-600 ease py-4 px-2 shadow-[0_7px_16px_rgba(43,33,25,0.08)] border-2 border-[rgba(43,33,25,0.1)]">
                    <img src={food.strMealThumb} alt='some food' className="rounded"/>
                    <p className="font-manrope my-4">{food.strMeal} </p>
                    <button className=" bg-[#6e7353] text-white py-2 px-4 rounded mt-auto">Add to Favorite</button>
                </div>
            ))}
        </div>
    );
}