import cards from './Cards.module.scss';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {img, name, maps } = props;
    return(
        <>
        

       <div key={props.name}>
            <div className={cards.card}> 
             <img className={cards.flag} src={img} alt={name} />
             <h1 className={cards.title}>{name}</h1>
             <Link to={ `name/${name}`}>readmore</Link>
            
        </div>
    </div>
        </>
      
    )
}

export default Card;