import {useState} from 'react';
export default function CategoryFilter({onSelect}) {
    const [hidden, setHidden] = useState(true);
    const [choice,setChoice] = useState("");
    function handleClick(){
        setHidden(!hidden);
    }
    function handleChoice(e){
        setChoice(e.target.value);
        onSelect(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.value}`);

    }
    return (
       <div>
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M4.25 5.61a1 1 0 0 1 .75-.36h14a1 1 0 0 1 .75 1.64l-5.5 6.16v5.19a1 1 0 0 1-.45.83l-3 2a1 1 0 0 1-1.55-.83v-7.19L4.25 7.25a1 1 0 0 1 0-1.64z"/>
            </svg>
        </button>
           <div className={hidden ?'hidden': ''} aria-expanded={!hidden}>
               <select className='list-none' onChange={handleChoice}>
                   <option value=''>All</option>
                   <option value='Starter'>Starter</option>
                   <option value='Dessert'>Dessert</option>
                   <option value='Vegetarian'>Vegetarian</option>
                   <option value='Side'>Side</option>
                   <option value='Beef'>Beef</option>
               </select>
           </div>
       </div>
    );
}