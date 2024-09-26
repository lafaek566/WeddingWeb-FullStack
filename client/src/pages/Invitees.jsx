import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getInvitees,
  addInvitee as apiAddInvitee,
  updateInvitee,
  deleteInvitee,
} from "../service/api";

function Invitees() {
  const [invitees, setInvitees] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    fetchInvitees();
  }, []);

  const fetchInvitees = async () => {
    const response = await getInvitees();
    setInvitees(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateInvitee(editId, name);
        setEditId(null);
        setIsUpdated(true);
      } else {
        await apiAddInvitee(name);
      }
      setName("");
      fetchInvitees();
    } catch (error) {
      console.error("Error adding/updating invitee:", error);
    }
  };

  const handleEdit = (invitee) => {
    setName(invitee.name);
    setEditId(invitee.id);
    setIsUpdated(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteInvitee(id);
      fetchInvitees();
    } catch (error) {
      console.error("Error deleting invitee:", error);
    }
  };

  const handleAddNewInvitee = () => {
    setEditId(null);
    setName("");
    setIsUpdated(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Invitees</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex flex-col md:flex-row justify-center"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded-l-md mb-2 md:mb-0 md:mr-2 flex-1"
          placeholder="Enter invitee name"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>
      {isUpdated && (
        <div className="text-center mb-4">
          <button
            onClick={handleAddNewInvitee}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Add New Invitee
          </button>
        </div>
      )}
      <ul className="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
        {invitees.map((invitee) => (
          <li
            key={invitee.id}
            className="flex justify-between items-center p-4"
          >
            <Link
              to={`/invitees/${invitee.id}/${encodeURIComponent(invitee.name)}`}
              className="text-blue-500 hover:underline flex-1"
            >
              {invitee.name}
            </Link>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(invitee)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(invitee.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invitees;
