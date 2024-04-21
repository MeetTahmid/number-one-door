import React from 'react';
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
const Slider1 = () => {
    return (
        <div className='mb-32'>
            <Carousel autoPlay autoPlaySpeed={3000} infinite responsive={responsive}>
                <div><img className="w-full" src="https://i.ibb.co/t2fN3ck/1.jpg" alt="" /></div>
                <div><img className="w-full" src="https://i.ibb.co/Snp2YhS/2.jpg" alt="" /></div>
                <div><img className="w-full" src="https://i.ibb.co/LR4QmR6/3.jpg" alt="" /></div>
            </Carousel>
        </div>
    );
};

export default Slider1;