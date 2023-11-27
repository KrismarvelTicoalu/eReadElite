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

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/publish" element={<Publish />} />
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/discussion" element={<Discussion />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
