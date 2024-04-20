import { useState, useEffect } from "react"
import Main from "../Main/Main";
const Mains = () => {

    const [mains, setMains] = useState([])

    useEffect(() => {
        fetch('blog2.json')
            .then(res => res.json())
            .then(data => setMains(data))
    }, [])

    return (
        <div className="px-7 lg:px-36">
            <h1 className="mt-16 text-2xl font-bold text-center mb-5"><span className="border-b-2 p-2 border-black">গ্লাসের দরজা</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                {
                    mains.map(main => <Main key={main.id} main={main}></Main>)
                }

            </div>
        </div>
    );
};

export default Mains;