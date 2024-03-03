import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div>
        <nav className="flex items-center justify-between fixed  w-full h-20 max-w-full bg-gray-600 text-white">
        <Link to={"/"}>
        <h1 className="text-black-900 font-bold text-2xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide ml-5 shadow-black ">Shopping Cart Functionality</h1>
        </Link>
       
       
        <ul className="flex list-none items-centre space-x-6 text-black-600 font-semibold">
            <Link to={"/"}>
                <li className="cursor-pointer text-xl list-none font-bold ">Home</li>
            </Link>
            <Link to={"/cart"}>
                <li className="cursor-pointer text-xl mr-8 font-bold">Cart</li>
            </Link>
        </ul>
        </nav>
        </div>
        
    );
}