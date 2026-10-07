export default function InstructionsBlock({meal}) {
    return (
        <div className='font-manrope'>
            <p className='underline'>INSTRUCTIONS</p>
            <p>{meal.strInstructions}</p>
        </div>
    );
}