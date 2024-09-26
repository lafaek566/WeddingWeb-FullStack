import React, { useState } from "react";
import { Link } from "react-router-dom";

const Invitees = () => {
  const [inviteeList, setInviteeList] = useState([]);

  const addInvitee = (name) => {
    setInviteeList((prevList) => [...prevList, name]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.inviteeName.value.trim();
    if (name && !inviteeList.includes(name)) {
      addInvitee(name);
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <h1
        className="text-4xl font-bold text-center text-pink-600 mb-4"
        id="home"
      >
        Welcome to Our Wedding Invitation!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2" id="mempelai">
            Mempelai
          </h2>
          <p className="mb-4">Details about the bride and groom.</p>
        </div>
        {/* Other sections */}
      </div>

      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        Daftar Undangan
      </h1>
      <form className="flex justify-center mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="inviteeName"
          placeholder="Masukkan Nama"
          className="p-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
        >
          Tambah Undangan
        </button>
      </form>

      <ul className="space-y-4">
        {inviteeList.map((name, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow"
          >
            <Link
              to={`/invitees/${index}/${encodeURIComponent(name)}`}
              className="text-lg text-pink-600 font-semibold hover:underline"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invitees;
