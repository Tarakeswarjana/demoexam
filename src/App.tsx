import React from 'react';

import './App.css';
import Chemistry from './component/Chemistry';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import Physics from './component/Physics';
import Allsub from './component/Allsub';
import Math from './component/Math';

function App() {
  return (
    <div className="App">
      <header>DEMO ONLINE TEST</header>
      <div>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Allsub/>}></Route>
      <Route path='allsubject' element={<Allsub/>}  ></Route>
      <Route path='physics' element={<Physics/>}></Route>
      <Route path='chemistry' element={ <Chemistry/>}></Route>
      <Route path='math' element={<Math/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </div>

    <footer>@ Addmen</footer>
    </div>
  );
}

export default App;
