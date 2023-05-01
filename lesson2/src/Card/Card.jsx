import cards from './Cards.module.scss';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {img, title, capital , ccn} = props;
    return(
        <div key={props.name}>
            <div className={cards.card}> 
             <img className={cards.flag} src={img} alt={title} />
             <h1 className={cards.title}>{title}</h1>
             <p className={cards.capital}>Capital : {capital}</p>
             <p>{ccn}</p>
             <Link to={ `news/${ccn}`}>readmore</Link>
            
        </div>
    </div>
    )
}

export default Card;