import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Rest.module.scss';

const Rest = () => {

    const [data, setData] = useState([]);

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
    }, [])

    return(
       <>
       <div className={styles.searchInput}>
       <input type="text" placeholder='search counter' className={styles.restcounterTitle} />
       </div>
       <div className={styles.cards}>
     {
     data.map((element) => (
        <div className={styles.card} key={element.id}> 
             <img className={styles.flag} src={element.flags.png} alt={element.name.common} />
             <h1 className={styles.title}>{element.name.common}</h1>
             <p className={styles.capital}>Capital : {element.capital}</p>
        </div>
    ))
    }     
      </div>
       </>
    )
}
export default Rest;