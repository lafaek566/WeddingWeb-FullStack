import { useEffect, useState } from "react";
import api from "../service/api";

function Invitations() {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    api.get("/invitations").then((response) => setInvitations(response.data));
  }, []);

  return (
    <div>
      <h2>Invitations</h2>
      <ul>
        {invitations.map((invite) => (
          <li key={invite.id}>{invite.invitation_message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Invitations;
