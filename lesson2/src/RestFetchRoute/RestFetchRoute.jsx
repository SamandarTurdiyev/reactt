import { useState, useEffect  } from 'react';
import axios from 'axios'
import styles from './RestFetchRoute.module.scss';
// import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const RestFetchRoute = () => {

    const [data, setData] = useState([]);

    const [searchtitle, setSearchTitle] = useState('')


    const FetchData  = async () =>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        FetchData()
    }, []);

    const myData = data.filter((element) => {
        if (!searchtitle.trim()) {
            return element 
        } else if (element.name.common.toLowerCase().includes(searchtitle.toLocaleLowerCase())) {
            return element

        }
    }).map((element) => (
        <Card key={element.id} img={element.flags.png} name={element.name.common} capital={element.capital} ccn={element.ccn3}/> 
    ))

    return(
       <>
       <div className={styles.searchInput}>
       <input type="text" placeholder='search counter' className={styles.restcounterTitle} value={searchtitle} onChange={(e) => setSearchTitle(e.target.value)}/>
       </div>
       <div className={styles.cards}>
     {
        myData
     }   
      </div>
       </>
    )
}
export default RestFetchRoute ;