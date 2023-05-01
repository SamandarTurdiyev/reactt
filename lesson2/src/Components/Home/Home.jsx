import { useState, useEffect } from "react";
import axios from "axios";
import Cards from '../Cards/Cards'

const Home = () => {
    const [country, setcountry] = useState([]);

    const GetData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setcountry(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        GetData()
    }, [])
    console.log(country);
  return (
    <div>
        {
            country.map((item) => (
                <Cards key={item.name} img={item.flags.svg} name={item.name.common} capital={item.capital}/>
            ))
        }
    </div>
  )
}

export default Home