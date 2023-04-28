import fetchStyle from './RestCounterFetch.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

const RestcounterFetch = () => {
    const [resourceType, setResourceType] = useState('Posts');
    const [resourceType2, setResourceType2] = useState('Posts2');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        getData();
    }, [resourceType]);


    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={fetchStyle.container}>
            <h1 className={fetchStyle.title}>Card About</h1>
           <div className={fetchStyle.btns}>
           <button className={fetchStyle.btn} onClick={() => setResourceType('Posts')}>Posts</button>
            <button className={fetchStyle.btn} onClick={() => setResourceType('Todos')}>Todos</button>
            
           </div>
            <h2 className={fetchStyle.blogTitle}>
                {resourceType} <span>About</span>
            </h2>
            <h3>
                {resourceType2}
            </h3>

            {
                data.slice(0,17).map((element) => (
                    <li key={element.id}>{element.title}
                        <span>{element.id}</span>
                    </li>
                ))
            }

        </div>
    )
}

export default RestcounterFetch;