import React from 'react';
import Bg from '../../assets/bg.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Home = () => {
    return (
        <div className="lg:h-[100vh] h-[1000px] mb-" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover' }}>
            <div className="container mx-auto h-full lg:flex-row flex flex-col justify-between items-center">
                <div className='w-[100%] lg:w-1/2 px-6'>
                    <h1 className="text-6xl font-bold leading-relaxed mb-6">সুন্দর এবং টেকসই দরজা</h1>
                    <p className="mb-6">আমাদের দরজা প্রদর্শনী সাইটে স্বাগতম! আমরা প্রযুক্তিগত সৃজনশীলতা এবং সুন্দরতা একত্রে সমন্বয় করে আপনার বাড়ি, অফিস, প্রতিষ্ঠান ইত্যাদি এর জন্য একটি সামর্থ্যপূর্ণ নকশা দরজা তৈরি করতে আমাদের বিশেষজ্ঞ দল সক্ষম, যারা সারাদেশ ব্যাপী মার্কেটিং করে থাকে</p>
                    <button className="btn px-6 border-none hover:bg-[#e04f4d] hover:text-white bg-[#fff]">Visit Doors</button>
                </div>
                <div className='w-[90%] lg:w-[600px]'>
                    <Carousel autoPlay autoPlaySpeed={2000} infinite responsive={responsive}>
                        <div><img className="w-full" src="https://i.ibb.co/GsQc7K3/01.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/J2rwvd6/2.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/Q800vzY/3.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/mTxm9KF/4.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/TW7LPgG/5.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/hZVWmgw/6.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/mJRD5KZ/7.jpg" alt="" /></div>
                        <div><img className="w-full" src="https://i.ibb.co/31938gJ/8.jpg" alt="" /></div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Home;
