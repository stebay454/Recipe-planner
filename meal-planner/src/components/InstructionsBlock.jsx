export default function InstructionsBlock({food}) {
    return (
        <div className='w-full font-manrope flex flex-col items-center'>
            <p className='underline'>INSTRUCTIONS</p>
            <p className='w-1/2 whitespace-break-spaces'>{food.strInstructions}</p>
        </div>
    );
}