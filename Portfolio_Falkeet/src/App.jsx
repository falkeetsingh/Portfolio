import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Links_centre from '../src/Components/Links_centre'
import Top_left from './Components/Top_left'
import Bottom_Left from './Components/Bottom_Left'
import Top_Right from './Components/Top_Right'
import Top_Middle from './Components/Top_Middle'
import Bottom_Middle from './Components/Bottom_Middle'
import Bottom_Right from './Components/Bottom_Right'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='App'>
            <div className='grid-item top-left'>
              <Top_left />
            </div>
            <div className='grid-item top-middle'>
              <Top_Middle />
            </div>
            <div className='grid-item top-right'>
              <Top_Right />
            </div>
            <div className='grid-item links-centre'>
              <Links_centre />
            </div>
            <div className='grid-item bottom-left'>
              <Bottom_Left />
            </div>
            <div className='grid-item bottom-middle'>
              <Bottom_Middle />
            </div>
            <div className='grid-item bottom-right'>
              <Bottom_Right />
            </div>
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
