import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticle = () => {
    const [data, setData] = useState({});

    const title  = useParams();
    console.log(title);

    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/702${title}`);
            setData(response.data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, []);

    return(
        <div >
          
            <div key={data.id}>
                <img src={data.img} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.capital}</p>
                
            </div>
           
        </div>
    )
}

export default SingleArticle;