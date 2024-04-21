import '@fortawesome/fontawesome-free/css/all.min.css';

const Items = () => {
    return (
        <div className='container mx-auto my-48'>
            <h1 className="mt-16 text-2xl font-bold mb-6"><span className="">আইটেম</span></h1>
            <div className='grid grid-cols-3 gap-12  '>
                <div className="card w-full rounded-none bg-[#03989e] shadow-xl">
                    <figure><img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-04/cbh-144.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Wood Door</h2>
                        <div className="card-actions justify-end">
                            <button className='bg-white px-5 py-4 rounded-full'>
                                <i className='fa-solid fa-arrow-right text-slate-800'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-full rounded-none bg-[#843c54] shadow-xl">
                    <figure><img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-06/sdc-355view-02rgbgdgfcolor.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Wood Door</h2>
                        <div className="card-actions justify-end">
                            <button className='bg-white px-5 py-4 rounded-full'>
                                <i className='fa-solid fa-arrow-right text-slate-800'></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-full rounded-none bg-[#05313d] shadow-xl">
                    <figure><img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-05/994192.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Wood Door</h2>
                        <div className="card-actions justify-end">
                            <button className='bg-white px-5 py-4 rounded-full'>
                                <i className='fa-solid fa-arrow-right text-slate-800'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;