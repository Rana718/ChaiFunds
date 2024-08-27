import React from "react";
import Link from "next/link";

const Navbar = ()=>{
    return(
        <nav className="bg-blue-950 text-white flex justify-between items-center h-16 px-4">
            <div className="logo font-bold text-lg flex justify-center items-center">
                <img src="Chai_gif.gif" width={44} className="mr-2" alt="" />
                <span>GetMeChai!</span>
            </div>
            {/* <ul className="flex justify-between gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}

            <div>
                <Link href={"/login"}>
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;