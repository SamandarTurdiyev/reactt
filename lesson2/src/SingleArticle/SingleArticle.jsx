import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticle = (props) => {
    
    const [data, setData] = useState('');

    const { ccn } = useParams();

    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${ccn}`);
            setData(response.data[0]);
            console.log(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, []);
    console.log(data);
    return(
        <div>
          
            <div key={data.ccn}>
                <img src={data.img} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.capital}</p>
            </div>
           
        </div>
    )
}

export default SingleArticle;