import logo from '../../assets/logo.png'
import mainBg from '../../assets/mainbg.png';
import door1 from '../../assets/home-door/1.png'
import door2 from '../../assets/home-door/2.png'
import door3 from '../../assets/home-door/3.png'
import door4 from '../../assets/home-door/4.png'
import facebook from '../../assets/navico/facebook.png'
import whatsapp from '../../assets/navico/whatsapp.png'
import gmail from '../../assets/navico/gmail.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${mainBg})`, height: '100vh', backgroundSize: 'cover', }}>

                {/* nav  */}
                <div className="navbar container mx-auto p-6">
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
                        <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li><a>কাঠের দরজা</a></li>
                            <li><a>কাচের দরজা</a></li>
                            <li><a>প্লাস্টিক দরজা</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex space-x-4">
                        <a href='https://www.facebook.com/MeetTahmid' target='blank'><img src={facebook} alt="" /></a>
                        <a href='#'><img src={whatsapp} alt="" /></a>
                        <a href='#'><img src={gmail} alt="" /></a>
                    </div>
                </div>
                {/* nav  */}

                {/* home  */}
                <div className="container mx-auto mt-40">
                    <div className="flex justify-between items-center lg:flex-row flex-col">
                        <div>
                            <h1 className="text-6xl text-white font-bold leading-relaxed">সুন্দর এবং টেকসই <br /> দরজা</h1>
                            <p className="mb-6 text-white my-4">আমাদের দরজা প্রদর্শনী সাইটে  স্বাগতম! আমরা প্রযুক্তিগত সৃজনশীলতা <br /> এবং সুন্দরতা একত্রে সমন্বয় করে আপনার বাড়ি, অফিস, প্রতিষ্ঠান ইত্যাদি এর <br /> জন্য একটি সামর্থ্যপূর্ণ নকশা দরজা তৈরি করতে আমাদের বিশেষজ্ঞ দল সক্ষম, <br /> যারা সারাদেশ ব্যাপী মার্কেটিং করে থাকে</p>
                            <button className="btn px-6 border-none hover:bg-[#e04f4d] hover:text-white bg-[#fff]">Visit Doors</button>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-7'>
                            <img src={door1} className="w-[230px] h-[255px] rounded-lg shadow-2xl" />
                            <img src={door2} className="w-[230px] h-[255px] rounded-lg shadow-2xl" />
                            <img src={door3} className="w-[230px] h-[255px] rounded-lg shadow-2xl" />
                            <img src={door4} className="w-[230px] h-[255px] rounded-lg shadow-2xl" />
                        </div>

                    </div>
                </div>
                {/* home  */}
            </div>
        </div >
    );
};

export default Home;