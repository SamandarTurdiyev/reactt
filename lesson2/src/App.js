import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Singlepage from './Components/singlepage/Singlepage';

function App() {
  return (
   <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="name/:name" element={<Singlepage />}/>
       </Routes>
   </div> 
  )
}

export default App;