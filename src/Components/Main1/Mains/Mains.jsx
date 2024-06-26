import { useState, useEffect } from "react"
import Main from "../Main/Main";
const Mains = () => {

    const [mains, setMains] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setMains(data))
    }, [])

    return (
        <div className="px-7 lg:px-36">
            <h1 className="mt-16 text-2xl font-bold "><span className="">কাঠের দরজা</span></h1>
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-10">

                {
                    mains.map(main => <Main key={main.id} main={main}></Main>)
                }

            </div>
        </div>
    );
};

export default Mains;