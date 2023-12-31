import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Employee from './pages/employee';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Employees" element={<Employee />} />
      </Routes>
      </div>
  );
}

export default App;
