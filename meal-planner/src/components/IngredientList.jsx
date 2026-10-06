export default function IngredientList({meal}) {
    function foodList(){
        const data = [];
     for(let i=1; i<=20;i++){
         let ingredientKey = meal[`strIngredient${i}`];
         console.log(ingredientKey);
         let measureKey = meal[`strMeasure${i}`];
         console.log(measureKey);
         if(ingredientKey!==''&& ingredientKey!== null && ingredientKey!==undefined){
             data.push({step:`step ${i}`,ingredient: ingredientKey, measure: measureKey});
         }
     }
     console.log(data);
     return data;
    }
    const data = foodList();
    return(
       <div className='font-manrope'>
           <p>INGREDIENTS</p>
           <ul>
               {meal && data.map(step => (
                   <li key={step.ingredient}>{step.step}: {step.ingredient} - {step.measure}</li>
                   )
               )}
           </ul>
       </div>
    );
}