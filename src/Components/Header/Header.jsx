import React from 'react';
import facebook from '../../assets/navico/facebook.png'
import whatsapp from '../../assets/navico/whatsapp.png'
import gmail from '../../assets/navico/gmail.png'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='bg-slate-900'>
            {/* nav  */}
            <div className="navbar  container mx-auto p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ fill: 'white' }} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hidden lg:block"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a href='#'>কাঠের দরজা</a></li>
                        <li><a href='#'>কাচের দরজা</a></li>
                        <li><a href='#'>প্লাস্টিক দরজা</a></li>
                        <li><a href='#'>মালিক এবং শ্রমিকরা</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex space-x-4">
                    <a href='https://www.facebook.com/MeetTahmid' target='blank'><img src={facebook} alt="" /></a>
                    <a href='#'><img src={whatsapp} alt="" /></a>
                    <a href='#'><img src={gmail} alt="" /></a>
                </div>
            </div>
            {/* nav  */}
        </div>
    );
};

export default Header;