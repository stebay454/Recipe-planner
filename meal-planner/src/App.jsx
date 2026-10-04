import { Link } from "react-router";
import Browse from "./pages/Browse.jsx";
export default function App(){
    return (
        <div className="w-full h-screen bg-[#F7F4EF] py-4 px-4">
          <h1 className="font-garamond text-4xl text-[#6e7353]">Recipe Planner</h1>
            <p className="font-manrope text-lg text-[#c66a45]">you can scroll to the meals and add your favorite meals to the carts.</p>
            <Browse />
        </div>
    );
}

