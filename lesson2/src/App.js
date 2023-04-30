import {  Routes , Route, Navigate } from 'react-router-dom';
import RestFetchRoute from './RestFetchRoute/RestFetchRoute';
import Error from './Error/Error';
import SingleArticle from './SingleArticle/SingleArticle';

function App(params) {
    
    return (
        <>

        
             <Routes>
                      <Route element={ <RestFetchRoute/> } path="/" />
                      <Route element={ <Error/> } path="*" />
                      <Route element={<Navigate to="/error404"/>} path="*"/>
                      <Route path="news/:title" element={<SingleArticle/>}/>
             </Routes>
       
        </>
    )
}
export default App;