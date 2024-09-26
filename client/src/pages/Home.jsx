import React from "react";
import { Link } from "react-router-dom";

const Home = ({ inviteeList }) => {
  return (
    <div>
      <h1>Selamat Datang di Halaman Utama</h1>
      <h2>Daftar Undangan:</h2>
      <ul>
        {inviteeList.map((name, index) => (
          <li key={index}>
            <Link to={`/invitees/${index}/${encodeURIComponent(name)}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
