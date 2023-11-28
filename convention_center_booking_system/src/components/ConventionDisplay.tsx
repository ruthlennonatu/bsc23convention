import React, { useState } from 'react';

// Updated the interface to reflect convention details
interface Convention {
  id: number;
  name: string;
  location: string;
  date: string;
}

interface Props {
  conventions: Convention[];
}

// Renamed component to ConventionsDisplay
const ConventionsDisplay: React.FC<Props> = ({ conventions }) => {
  const [editingConventionId, setEditingConventionId] = useState<number | null>(null);

  // Updated function names and parameters
  const handleEditClick = (conventionId: number) => {
    setEditingConventionId(conventionId);
    // Logic for editing convention details
  };

  const handleSaveClick = () => {
    setEditingConventionId(null);
    // Logic for saving convention details
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2>Your Conventions</h2>
      <table style={{ border: '2px solid black', borderRadius: '15px', borderCollapse: 'separate', padding: '10px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {conventions.map((convention) => (
            <tr key={convention.id}>
              <td style={{ width: '180px' }}>{editingConventionId === convention.id ? <input type="text" defaultValue={convention.name} /> : convention.name}</td>
              <td style={{ width: '180px' }}>{editingConventionId === convention.id ? <input type="text" defaultValue={convention.location} /> : convention.location}</td>
              <td style={{ width: '180px' }}>{editingConventionId === convention.id ? <input type="date" defaultValue={convention.date} /> : convention.date}</td>
              <td>
                {editingConventionId === convention.id ? (
                  <button onClick={handleSaveClick}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(convention.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConventionsDisplay;
