import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="btn btn-ghost text-xl hidden lg:block"><img className='w-28' src='https://i.ibb.co/qYNcCvG/logo.png' alt="" /></a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Created By <a href="https://facebook.com/MeetTahmid" target='_blank' className='text-purple-800 font-bold'>MeerTahmid</a>
                        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Powerd By <a href="#" className='text-purple-800 font-bold'>Sherpur Graphics</a></a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500" href='#'>
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>

        </div>
    );
};

export default Footer;