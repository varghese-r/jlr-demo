import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Body/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import JlrContextProvider from './contexts/JlrContextProvider';
import Fota from './components/Pages/Fota/Fota';
import Purchase from './components/Pages/Purchase/Purchase';
import Owners from './components/Pages/Owners/Owners';
import Login from './components/Pages/Login/Login';
import Vehicles from './components/Pages/Vehicles/Vehicles';

function App() {
  return (
      <JlrContextProvider>
        <Header/>
        <div className="bodyArea">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/fota" element={<Fota />} />
            <Route exact path="/purchase" element={<Purchase />} />
            <Route exact path="/owners" element={<Owners />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/vehicles" element={<Vehicles />} />
          </Routes>
        </div>
      </JlrContextProvider>
  );
}

export default App;
