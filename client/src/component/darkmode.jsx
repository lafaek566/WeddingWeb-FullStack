import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user's dark mode preference
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);

    // Apply dark mode class to the body
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("dark-mode", newMode); // Save preference in localStorage
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default DarkMode;
