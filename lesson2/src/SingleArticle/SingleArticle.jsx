import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import single from './SingleArticle.module.scss'

const SingleArticle = () => {
    const { name } = useParams();
    const [item, setItem] = useState({});


    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            setItem(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, []);
    return(
        <div>
          
            <div className={single.card} key={item}>
                <img className={single.img} src={item.flags?.png} />
                <h2 className={single.title}>{name}</h2>
                <p className={single.capital}><span className={single.span}>Capital:</span> {item.capital}</p>
                <p className={single.population}><span className={single.span}>Population:</span>{item.population}</p>
                <p className={single.region}><span className={single.span}>Region:</span>{item.region}</p><br />
                <p className={single.region}><a href={item.maps?.googleMaps} target="_blank">Geogle Maps</a></p><br />
              

                <Link to="/">Home Page</Link>
            </div>
           
        </div>
    )
}

export default SingleArticle;










