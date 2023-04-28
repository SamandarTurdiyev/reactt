import { useRef } from 'react';
import style from './Lesson52.module.scss';





const Lesson52 = () => {
    const myInputRef = useRef(null);

    const handleClick = () => {
        console.log(myInputRef.current.value);
    }

    return(
        <div className={style.container}>
             <h1 className={style.title}>USER DETAILS</h1>
             <button className={style.btn}>Add Users</button>
             <div>
                <label >
                    Name: 
                    <input type="text" ref={myInputRef}/>
                </label>
                <button onClick={handleClick} >Get Data</button>
             </div>
             <div>
                
             </div>
        </div>
    )
}
export default Lesson52;