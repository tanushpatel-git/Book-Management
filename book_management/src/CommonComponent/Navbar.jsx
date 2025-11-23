import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [dark, setDark] = useState(false);

    function handleClick() {
        setDark(!dark);
    }

    return (
        <nav className={`w-full ${dark ? "text-black" : "text-white"} px-6 py-4 shadow-xl flex items-center justify-between backdrop-blur-lg ${dark ? "bg-[#FCF5EE]" : " bg-gray-900/80"}`}>
            <div className="text-4xl font-bold tracking-wide"><Link to="/">Book Management</Link></div>

            <ul className="md:flex gap-8 text-lg items-center">
                <li className={`${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} transition-colors cursor-pointer`}><Link to="/">Home</Link></li>

                
                <li className={`${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} transition-colors cursor-pointer`}><Link to="/About">About</Link></li>


                <li className={`${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} transition-colors cursor-pointer`}><Link to="/Contact">Contact</Link></li>


                <li className={`${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} transition-colors cursor-pointer`}><Link to="/AddBooks">Add Books</Link></li>


                <button className={`${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} transition-colors cursor-pointer`}><Link to="/Login" className={`border ${dark ? "border-dark" : "border-white"} rounded-2xl p-2 leading-2`}>Login</Link></button>


                <button onClick={handleClick} className={`border ${dark ? "border-black" : "border-white"} ${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"} rounded-2xl p-2`}>{dark ? "Enable Dark Mode" : "Enable Ligth Mode"}</button>
            </ul>
        </nav>
    );
}
