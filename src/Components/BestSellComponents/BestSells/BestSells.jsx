import { useState, useEffect } from "react"
import BestSell from "../BestSell/BestSell";
const BestSells = () => {

    const [sells, setSell] = useState([])

    useEffect(() => {
        fetch('BestSell.json')
            .then(res => res.json())
            .then(data => setSell(data))
    }, [])

    return (
        <div className="px-7 lg:px-36">
            <h1 className="mt-16 text-2xl font-bold bg-[#05313d]  p-4 text-white mb-5"><span className="">বেস্ট সেল</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">

                {
                    sells.map(sell => <BestSell key={sell.id} sell={sell}></BestSell>)
                }

            </div>
        </div>
    );
};

export default BestSells;