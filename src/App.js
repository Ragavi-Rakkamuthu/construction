import logo from './logo.svg';
import './App.css';
import NavbarHeader from './Components/Navbar';
import Carausel from './Components/carausel';
import Homecontent from'./Components/homecontent';
import Homecontent1 from'./Components/homecontent1';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Commercial from './Components/Comercial';
import Login from './login';
function App() {
  return (
    <>
     <NavbarHeader/>
     <Carausel/>
     <Homecontent/>
     <Homecontent1/>
     
    {/* <Router>
      <Routes>
        
        <Route path='/com' element={<Commercial/>}/>
      </Routes>
    </Router> */}
    
   
    {/* <Homecontent/>
    <Homecontent1/> */}
   
      
    
    </>
   

  ); 
}

export default App;
