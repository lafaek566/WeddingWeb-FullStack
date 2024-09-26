import React from "react";
import Header from "./Header";
import Mempelai from "./Mempelai";
import Undangan from "./Undangan";
import LoveStory from "./LoveStory";
import Photo from "./Photo";
import Gifts from "./Gifts";
import PrayersWishes from "./PrayersWishes";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Mempelai />
      <Undangan />
      <LoveStory />
      <Photo />
      <Gifts />
      <PrayersWishes /> {/* Ensure this is included */}
    </div>
  );
};

export default HomePage;
