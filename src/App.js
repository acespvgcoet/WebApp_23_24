import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Newsletter from './components/Newsletter';
import Magazine from './components/Magazine';
import Contact from './components/Contact';
import Event from './components/Events';
function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/team' element={<Team/>}></Route>
          <Route exact path='/events' element={<Event/>}></Route>
          <Route exact path='/newsletter' element={<Newsletter/>}></Route>
          <Route exact path='/magazine' element={<Magazine/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
