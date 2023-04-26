import { useState } from "react";
import './ComponentA.scss'
const ComponentA = (props) =>{
    // const [count, setCount] = useState(5);

    // const handleCount = () =>{
    //     setCount(count +5)
    // }
    // const handleCountMinus = () =>{
    //     setCount(count -1)
    // }

    const [box,setBox] = useState(false);
   const handleBox = () => {
        setBox(!box)
    }
    

console.log(props);
    return (
        <div>
         {/* <span className="title">My counter</span>
         <h2>
         {
            count
         } 
         </h2>
         <button onClick={handleCount}>Click</button>
         <button onClick={handleCountMinus}>Delete</button> */}

             <div className={box? 'box notActive' : 'box'}>
                <div>
                <h2 className="box-title">Keyboard accessible modal in React!</h2>
                    <button onClick={handleBox} className="box-btn">Open Modal!</button>
                </div>
             </div>


             <div className={box?  'box': 'box notActive'  }>
                <div className="box-part">
                <h2 className="box-part-title">React.js about</h2>
                <p className="box-part-text">
                Dynamic va tez, SPA loyihalar qurish uchun mashxur Javascript kutubxonasi hisoblanadi.
                Facebook tomonidan 2013 yil Mayda ommaga tadqim etilgan.
                node modules –  package orqali o’rnatilgan barcha kodlar saqlanadi
                Public – Bu fayli Ichida asosiy public ma’lumotlar saqlanadi, svg rasm, favicon bo’lishi mumkin.
                Src- dasturimizning asosiy source kodlari saqlanadi.
 

                </p>
                <button onClick={handleBox} className="box-part-btn">Closse</button>

                </div>
             </div>
        </div>
    )
}
export default ComponentA;