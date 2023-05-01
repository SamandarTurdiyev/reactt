/* eslint-disable jsx-a11y/alt-text */
import { useParams, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Singlepage = () => {
    const  { name }  = useParams()
    console.log(name);
    const [country, setcountry] = useState({});

    const fetchData = async () => {
        const response  = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        console.log(response.data[0])
        setcountry(response.data[0])
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(country);
  return (
    <div key={country} className='card'>
      <h3>{name}</h3>
      <img src={country.flags.svg}/>
      <h4>{country.capital}</h4>
      <Link to="/">Home page</Link>
    </div>
  )
}

export default Singlepage;