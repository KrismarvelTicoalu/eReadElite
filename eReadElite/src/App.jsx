import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css'
import './css/bootstrap.min.css'
import './css/responsive.css'
import './css/jquery.mCustomScrollbar.min.css'
import './css/owl.carousel.min.css'
import HomePage from './pages/Homepage'
import Catalog from './pages/Catalog';
import Discussion from './pages/Discussion';
import Publish from './pages/Publish';
import Mystery from './pages/Mystery';
import SciFi from './pages/Sci-fi';
import Romance from './pages/Romance';
import Educational from './pages/Educational'
import Theology from './pages/Theology'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/publish" element={<Publish />} />
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/discussion" element={<Discussion />} />
            <Route exact path="/catalog/mystery" element={<Mystery />} />
            <Route exact path="/catalog/sci-fi" element={<SciFi/>} />
            <Route exact path="/catalog/romance" element={<Romance />} />
            <Route exact path="/catalog/educational" element={<Educational />} />
            <Route exact path="/catalog/theology" element={<Theology />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
