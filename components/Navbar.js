import React from "react";

const Navbar = ()=>{
    return(
        <nav className="bg-black text-white flex justify-between items-center h-16 px-4">
            <div className="logo justify-between">GetMeChai!</div>
            <ul className="flex justify-between gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar;