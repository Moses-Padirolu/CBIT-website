import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home"
import About from './components/About';
import Clubs from './components/Clubs';
import Student from './components/Student';
import Bills from './components/Bills';
import Institute from './components/Institute';
import SideHome from './components/SideHome';
import Attendance from './components/Attendance';
import Assignment from './components/Assignment';
import COSC from './components/COSC';
import Robovanza from './components/Robovanza';
import Spandana from './components/Spandana';
import MOI from './components/MOI';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/student' element={<Student/>}>
            <Route path='/student/' element={<SideHome/>}/>
            <Route path='bills' element={<Bills/>}/>
            <Route path='institute' element={<Institute/>}/>
            <Route path='sidehome' element={<SideHome/>}/>
            <Route path='attendance' element={<Attendance/>}/>
            <Route path='assignment' element={<Assignment/>}/>
          </Route>
          <Route path='/clubs' element={<Clubs/>}>
            <Route path='spandana' element={<Spandana/>}/>
            <Route path='moi' element={<MOI/>}/>
            <Route path='cosc' element={<COSC/>}/>
            <Route path='robovanza' element={<Robovanza/>}/>
          </Route>
          <Route  path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
