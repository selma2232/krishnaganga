import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageBox from "./components/MessageBox";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TreatmentPage from "./pages/TreatmentPage";
import FeePage from "./pages/FeePage";
import BannedItemsPage from "./pages/BannedItemsPage";
import DurationPage from "./pages/DurationPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import VolunteerPage from "./pages/VolunteerPage";

function App() {
  const location = useLocation();

  const hiddenRoutes = ["/contact-us", "/donate", "/volunteer"];
  const hideMessageBox = hiddenRoutes.includes(location.pathname);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/fee" element={<FeePage />} />
        <Route path="/banned-items" element={<BannedItemsPage />} />
        <Route path="/duration" element={<DurationPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
      <Footer />
      {!hideMessageBox && <MessageBox />}
    </div>
  );
}

export default App;
