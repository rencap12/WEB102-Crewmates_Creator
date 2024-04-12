import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import '../App.css'; // Import your CSS file for styling

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
    <div className="crewmate-details">
      <h2 className="crewmate-details-title">Crewmate Details</h2>
      <div className="crewmate-details-info">
        <p className="crewmate-details-label">Name:</p>
        <p className="crewmate-details-value">{crewmate.name}</p>
      </div>
      <div className="crewmate-details-info">
        <p className="crewmate-details-label">Speed:</p>
        <p className="crewmate-details-value">{crewmate.speed} mph</p>
      </div>
      <div className="crewmate-details-info">
        <p className="crewmate-details-label">Color:</p>
        <p className="crewmate-details-value">{crewmate.color}</p>
      </div>
      <Link to="/gallery" className="crewmate-details-back-link">Back to Gallery</Link>
    </div>
  );
};

export default CrewmateDetails;
