import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Attendees } from './pages/attendees';
import { Gallery } from './pages/gallery';
import { Home } from './pages/home';
import { Itinerary } from './pages/itinerary';
import { Register } from './pages/register';
import { Sponsors } from './pages/sponsors';
import { Support } from './pages/support';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendees" element={<Attendees />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/support" element={<Support />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
