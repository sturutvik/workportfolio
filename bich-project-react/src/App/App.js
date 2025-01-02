import "./App.css";

// import react-router-dom
import { Route, Routes } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* JSX એલિમેન્ટ્સ તરીકે ફંક્શન્સને return કરો */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} /> {/* Error પેજ માટે wildcard path ઉમેરો */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
