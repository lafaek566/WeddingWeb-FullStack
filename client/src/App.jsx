import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import Invitees from "./pages/Invitees";
import PrayerWishes from "./component/PrayersWishes"; // Import PrayerWishes
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import EditPrayerWish from "./pages/EditPrayerWish";
import PrayerWishList from "./component/PrayerWishList";
import "./index.css";

const App = () => {
  const [inviteeList, setInviteeList] = useState([]);

  const addInvitee = (name) => {
    setInviteeList((prevList) => [...prevList, name]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitees" element={<Invitees />} />
        <Route path="/prayer-wishes" element={<PrayerWishes />} />
        <Route path="/invitees/:id/:name" element={<HomePage />} />
        <Route path="/list" element={<PrayerWishList />} />{" "}
        {/* Ubah path untuk PrayerWishList */}
        <Route path="/edit/:id" element={<EditPrayerWish />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
