import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [dark, setDark] = useState(false);

    function handleClick() {
        setDark(!dark);
    }

    return (
        <nav
            className={`w-full px-8 py-5 flex items-center justify-between 
            backdrop-blur-xl shadow-2xl transition-all duration-300
            ${dark ? "bg-[#FCF5EE] text-gray-900" : "bg-gray-900/80 text-white"}`}
        >
            <div className="text-3xl font-extrabold tracking-wide">
                <Link
                    to="/"
                    className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent hover:opacity-90 transition"
                >
                    Book Management
                </Link>
            </div>

            <ul className="flex gap-10 text-lg items-center font-medium">
                {["/", "/About", "/Contact", "/AddBooks"].map((path, i) => (
                    <li key={i}>
                        <Link
                            to={path}
                            className={`relative transition-all duration-300
                            ${dark ? "hover:text-[#EE6983]" : "hover:text-gray-300"}
                            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                            after:w-0 after:bg-current after:transition-all after:duration-300
                            hover:after:w-full`}
                        >
                            {path === "/" ? "Home" : path.replace("/", "")}
                        </Link>
                    </li>
                ))}

                <Link
                    to="/Login"
                    className={`px-5 py-2 rounded-full border transition-all duration-300
                    ${dark ? "border-gray-800 hover:bg-[#EE6983] hover:text-white" : "border-white hover:bg-white hover:text-gray-900"}
                    hover:shadow-lg`}
                >
                    Login
                </Link>

                <button
                    onClick={handleClick}
                    className={`px-5 py-2 rounded-full border transition-all duration-300
                    ${dark
                        ? "border-gray-800 hover:bg-gray-900 hover:text-white"
                        : "border-white hover:bg-white hover:text-gray-900"}
                    hover:shadow-lg active:scale-95`}
                >
                    {dark ? "Enable Dark Mode" : "Enable Light Mode"}
                </button>
            </ul>
        </nav>
    );
}