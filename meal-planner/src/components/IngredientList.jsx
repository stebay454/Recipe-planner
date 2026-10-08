export default function IngredientList({food}) {
    function foodList(){
        const data = [];
     for(let i=1; i<=20;i++){
         let ingredientKey = food[`strIngredient${i}`];
         let measureKey = food[`strMeasure${i}`];
         if(ingredientKey!==''&& ingredientKey!== null && ingredientKey!==undefined){
             data.push({step:`${i}`,ingredient: ingredientKey, measure: measureKey});
         }
     }
     return data;
    }
    const data = foodList();
    return(
       <div className='w-full font-manrope flex flex-col items-center'>
           <p className='underline mr-2'>INGREDIENTS</p>
           <ul className='flex flex-col items-center'>
               {food && data.map(ingredients => (
                   <li key={ingredients.ingredient} className='mr-auto'>{ingredients.step}. {ingredients.ingredient} - {ingredients.measure}</li>
                   )
               )}
           </ul>
       </div>
    );
}