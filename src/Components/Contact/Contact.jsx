import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative mb-16">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bangladesh%20sherpur%20bogura+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>


                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Our Info</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label> <br />
                            <p>Main@contact@gmai.com</p>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Phone Number</label>
                            <p>*************</p>


                        </div>
                        <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none rounded text-lg">Go To Our Facebook Page</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;