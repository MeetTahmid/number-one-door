import React from 'react';

const About = () => {
    return (
        <div>
            <section className=" body-font container mx-auto mt-12">
                <h1 className="mt-16 text-2xl font-bold mb-6"><span className="">আমাদের সম্পর্কে</span></h1>
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-auto lg:h-[500px] w-auto lg:w-[1200px]"
                                src="https://i.ibb.co/DwGK5Tp/abstract-minimal-background-with-floor.jpg"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img className='rounded-full' src="https://i.ibb.co/1vTDKBk/pexels-italo-melo-881954-2379004.png" alt="" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                        Phoebe Caulfield
                                    </h2>
                                    <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                                    <p className="text-base">
                                        Owner Of the NumberOneDoor
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    আমরা হাজারো গ্রাহকের প্রত্যাশা এবং সমৃদ্ধ অভিজ্ঞতা সাধারি করে আমাদের দরজা দোকানের ইতিহাস শুরু হয়েছে। আমরা গর্বিতভাবে একে অপরের মানের সাথে মিলিয়ে কাজ করে আসছি আমাদের কাস্টমারদের সাথে। আমাদের দরজা দোকান একটি উজ্জ্বল ইতিহাস সম্পন্ন করছে, যেখানে আমরা সত্যিই আপনার বাসা বা ব্যবসার জন্য সেরা দরজা ও উইন্ডোর সমাধান সরবরাহ করছি।
                                    এটি আপনার ওয়েবসাইটের সামগ্রিক উদ্দেশ্য, উদ্দেশ্য, এবং সম্প্রতির উল্লেখযোগ্য বৈশিষ্ট্যের সাথে সামঞ্জস্যপূর্ণ হতে পারে।
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;