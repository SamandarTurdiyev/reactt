import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './RestFetchRoute.module.scss';
// import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const RestFetchRoute = () => {

    const [data, setData] = useState([]);

    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`);
            setData(response.data);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, [])

    return(
       <>
       <div className={styles.searchInput}>
       <input type="text" placeholder='search counter' className={styles.restcounterTitle} />
       </div>
       <div className={styles.cards}>
     {


     data.map((element) => (
       
        <Card key={element.id} img={element.flags.png} title={element.name.common} capital={element.capital} ccn={element.ccn3}/>
        // <div className={styles.card} key={element.id}> 
        //      <img className={styles.flag} src={element.flags.png} alt={element.name.common} />
        //      <h1 className={styles.title}>{element.name.common}</h1>
        //      <p className={styles.capital}>Capital : {element.capital}</p>
        //      <button>Read more</button>
        // </div>
    ))
    }     
      </div>
       </>
    )
}
export default RestFetchRoute ;