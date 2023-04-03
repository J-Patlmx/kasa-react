import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Logement from './pages/Logement';
import Footer from './components/Footer';
import Header from './components/Header';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    {/* Tout les root non disponible */}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;