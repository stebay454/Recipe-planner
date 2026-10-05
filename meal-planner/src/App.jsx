import Browse from "./pages/Browse.jsx";
import NavBar from "./components/NavBar.jsx";
export default function App(){
    return (
        <div className="w-full min-h-screen bg-linear-[100deg] from-[#f5f5f5] to-[#dcdcdc]">
            <NavBar />
            <Browse />
        </div>
    );
}

