import { useState, useEffect } from "react"
import BestSell from "../BestSell/BestSell";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
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
const BestSells = () => {

    const [sells, setSell] = useState([])

    useEffect(() => {
        fetch('BestSell.json')
            .then(res => res.json())
            .then(data => setSell(data))
    }, [])

    return (
        <div className="px-7 lg:px-36">
            <h1 className="mt-16 text-2xl font-bold"><span className="">বেস্ট সেল</span></h1>
            <Carousel responsive={responsive} >
                {
                    sells.map(sell => <BestSell key={sell.id} sell={sell}></BestSell>)
                }
            </Carousel>



        </div>
    );
};

export default BestSells;