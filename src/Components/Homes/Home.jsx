
import mainBg from '../../assets/mainbg.png';
import door1 from '../../assets/home-door/1.png'
import door2 from '../../assets/home-door/2.png'
import door3 from '../../assets/home-door/3.png'
import door4 from '../../assets/home-door/4.png'

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='h-[1600px] lg:h-[100vh] pt-28' style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', }}>

                {/* home  */}
                <div className="container mx-auto ">
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