
import './App.css';
import { BrowserRouter as Router, Route, Routes}from "react-router-dom";
//componentes
import Navbar from './components/navegacion/navbar';

import Cabecera from './components/Cabecera';


import Noticias from './components/paginas/Noticias';
import Posts from './components/paginas/post';
import Asociate from './components/paginas/Asociate';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Router>        
        <Navbar  />
        
        <Routes>
          
          <Route path='/' exact element={<Noticias/>}/>
          <Route path='/Post' exact element={<Posts/>}/>
          <Route path='/Asociate' exact element={<Asociate/>}/>
        </Routes>
      </Router>
        

    </div>
  );
}

export default App;
