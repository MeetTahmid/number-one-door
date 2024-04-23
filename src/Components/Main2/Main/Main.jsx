import PropTypes from 'prop-types';


import React from 'react';

const Main = ({ main }) => {
    const { name, image } = main;
    return (
        <div className='mt-8 mb-12 rounded-lg shadow-xl w-full hover:translate-y-4 rounded-lghover:translate-y-4 transition-all duration-700'>
            <img className='rounded-lg' src={image} alt="" />
            <div className='py-6 px-5'>
                <h3 className='text-xl font-bold mb-3'>{name}</h3>
                <a href="#" className='btn btn-ghost bg-base-200'>Buy Now</a>
            </div>
        </div>
    );
};

export default Main;

Main.propTypes = {
    main: PropTypes.object.isRequired
};