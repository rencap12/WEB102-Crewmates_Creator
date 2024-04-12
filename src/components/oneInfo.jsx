// CrewmateDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const CrewmateDetails = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    async function fetchCrewmate() {
      try {
        const { data, error } = await supabase
          .from('Crewmates')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setCrewmate(data);
      } catch (error) {
        console.error('Error fetching crewmate:', error.message);
      }
    }
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div>
      <h2>Crewmate Details</h2>
      <p>Name: {crewmate.name}</p>
      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      <Link to="/gallery">Back to Gallery</Link>
    </div>
  );
};

export default CrewmateDetails;
