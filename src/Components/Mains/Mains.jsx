import { useState, useEffect } from "react"
import blogJson from '../../../public/blog.json'
const Mains = () => {

    const [mains, setMains] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Mains;