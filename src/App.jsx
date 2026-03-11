import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageBox from "./components/MessageBox";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TreatmentPage from "./pages/Treatment";
import FeePage from "./pages/Fee";
import BannedItemsPage from "./pages/BannedItems";
import DurationPage from "./pages/Duration";
import ContactPage from "./pages/Contact";
import DonatePage from "./pages/Donate";
import VolunteerPage from "./pages/Volunteer";
import SearchResultsPage from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Location from "./pages/location"; 
import Terms from "./pages/Terms";
import Privacy from "./pages/privacy";






function App() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const hiddenRoutes = ["/contact-us"];
  const hideMessageBox = hiddenRoutes.includes(location.pathname);

  return (
    <div>
      <Header onSearch={handleSearch} />
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
        <Route path="/location" element={<Location />} />
         <Route path="/terms" element={<Terms />} />
  <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/search"
          element={<SearchResultsPage query={searchQuery} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {!hideMessageBox && <MessageBox />}
      
    </div>
  );
}

export default App;

