import PropTypes from 'prop-types';


import React from 'react';

const Main = ({ main }) => {
    const { name, image } = main;
    return (
        <div className='mt-8 mb-12 w-full rounded-lg bg-white shadow-xl hover:translate-y-4 transition-all duration-700'>
            <img className='w-[800px]' src={image} alt="" />
            <div className='py-6 px-5'>
                <h3 className='text-2xl font-bold mb-3'>কাঠের দরজা</h3>
                <p>এই দরজা টি কিনতে স্ক্রীনশট নিয়ে Whatsapp এবং Facebook Page এ যোগাযোগ করুন</p>
            </div>
        </div>
    );
};

export default Main;

Main.propTypes = {
    main: PropTypes.object.isRequired
};