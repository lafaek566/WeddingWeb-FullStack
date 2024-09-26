import React from "react";
import { useParams } from "react-router-dom";

const InviteeDetail = () => {
  const { id, name } = useParams();
  const decodedName = decodeURIComponent(name); // Decode nama

  return (
    <div>
      <h1>Undangan</h1>
      {/* <p>ID: {id}</p> */}
      <p>Nama: {decodedName}</p>
      <p>Selamat! Anda diundang ke acara pernikahan kami.</p>
    </div>
  );
};

export default InviteeDetail;
