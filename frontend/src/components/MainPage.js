import {Navbar} from "./Navbar";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {

    const navigate = useNavigate();

    function showTickets() {
        navigate('/tickets');
    }

    return ( <div>
        <Navbar/>
        <button className="w-32 p-1 mx-auto mt-10 flex justify-center h-12 bg-yellow-400 text-2xl" onClick={showTickets}>Bilety</button>
    </div>
    )
}