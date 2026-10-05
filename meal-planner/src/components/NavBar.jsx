import {Link} from "react-router-dom";
export default function NavBar() {
  return(
      <div className="bg-white rounded flex justify-around items-center py-6 px-6">
          <p className='text-[#6e7353] font-manrope text-4xl ml-4'>RECIPE PLANNER</p>
          <nav className='flex gap-6'>
              <Link to="/" className='font-manrope'>HOME</Link>
              <Link to="/Favorite" className='font-manrope'>FAVORITES(0)</Link>
          </nav>
      </div>
  );
};