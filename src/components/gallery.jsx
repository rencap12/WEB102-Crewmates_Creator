import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { supabase } from '../client';
import EditCrewmate from './editCrewmate'; // Adjusted import with correct filename
import '../App.css';

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    async function fetchCrewmates() {
      try {
        const { data, error } = await supabase.from('Crewmates').select('*');
        if (error) throw error;
        setCrewmates(data || []);
      } catch (error) {
        console.error('Error fetching crewmates:', error.message);
      }
    }
    fetchCrewmates();
  }, []);

  const handleEdit = (crewmateId) => {
    window.location = `/edit/${crewmateId}`; // Navigate to the EditCrewmate component with crewmate ID
  };

  const handleDelete = async (crewmateId) => {
    try {
      await supabase
        .from('Crewmates')
        .delete()
        .eq('id', crewmateId);
      setCrewmates(prevCrewmates => prevCrewmates.filter(crewmate => crewmate.id !== crewmateId));
    } catch (error) {
      console.error('Error deleting crewmate:', error.message);
    }
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div>
        {crewmates.map((crewmate) => (
          <div className='cardInfo'
            key={crewmate.id} 
            style={{ 
              border: '1px solid gray',  
              margin: '10px', 
              alignContent: 'center',
              backgroundImage: `linear-gradient(to bottom, ${crewmate.color}, #fff)`, 
            }}
          >
            <h3>{crewmate.name}</h3>
            <p>Speed: {crewmate.speed} mph</p>
            <p>Color: {crewmate.color}</p>
            <Link to={`/crewmate/${crewmate.id}`} className='cardButton'>View</Link>
            <button className='cardButton' onClick={() => handleEdit(crewmate.id)}>Edit</button>
            <button className='cardButton' onClick={() => handleDelete(crewmate.id)}>Delete</button>
          </div>
        ))}
      </div>
      {/* Route for editing crewmate */}
      <Routes>
        <Route path="/edit/:id" component={EditCrewmate} />
      </Routes>
    </div>
  );
};

export default Gallery;
