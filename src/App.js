import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Employees" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
