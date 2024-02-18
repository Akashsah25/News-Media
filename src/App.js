import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import NewsList from './NewsList';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewsList/>}/>
        <Route path='/:type' element={<NewsList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
