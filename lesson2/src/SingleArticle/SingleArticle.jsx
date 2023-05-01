import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticle = () => {
    const { name } = useParams();
    console.log(name);
    const [item, setItem] = useState({});


    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            setItem(response.data[0]);
            console.log(response.data[0] );
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, []);
    return(
        <div>
          
            <div key={item}>
                {/* <img src={item.flags.png} /> */}
               <p>{item.flag}</p>
                <p>{item.capital}</p>
                <p>{name}</p>
            </div>
           
        </div>
    )
}

export default SingleArticle;










