import cards from './Cards.module.scss';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {img, title, capital} = props;
    return(
        <div key={props.name}>
            <div className={cards.card}> 
             <img className={cards.flag} src={img} alt={title} />
             <h1 className={cards.title}>{title}</h1>
             <p className={cards.capital}>Capital : {capital}</p>
             <Link to={ `news/${title}`}>readmore</Link>
            
        </div>
    </div>
    )
}

export default Card;