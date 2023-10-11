import './App.css';
import About from './pages/About';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Skill from './pages/Skill';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skill' element={<Skill/>}/>
        <Route exact path='/resume' element={<Resume/>}/>


      </Routes>
      {/* <HomePage/> */}
      {/* <About/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
