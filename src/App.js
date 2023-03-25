import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Room from './components/ChatRoomComponents/RoomPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './Auth/AuthPage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/AuthPage' exact component={AuthPage} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
