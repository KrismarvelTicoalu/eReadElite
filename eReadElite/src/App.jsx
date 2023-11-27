import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css'
import './css/bootstrap.min.css'
import './css/responsive.css'
import './css/jquery.mCustomScrollbar.min.css'
import './css/owl.carousel.min.css'

import HomePage from './pages/Homepage'
import Celebs from './pages/Celebs';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
// import Profile from './pages/Book_Profile';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/" element={<Profile />} /> */}
            <Route exact path="/celebs" element={<Celebs />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/tv" element={<Tv />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
