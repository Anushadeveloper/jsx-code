
import './App.css';
import Content from './Content/content';
import LandingPage from './LandingPAge/landingpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="bg-container">
      <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/content' element={<Content/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
