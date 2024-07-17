import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import SideComponent from './components/SideComponent';
import MainComponent from './components/MainComponent';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainComponent />}>
          <Route index element={<About />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
      </Routes>

    </Router>
  )
}

export default App;
