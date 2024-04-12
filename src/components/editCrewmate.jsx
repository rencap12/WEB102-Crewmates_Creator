import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link, Route, Routes } from 'react-router-dom';

const EditCrewmate = () => {
  const { id } = useParams();

  const [crewmateInfo, setCrewmateInfo] = useState({
    name: '',
    speed: 0,
    color: ''
  });

  useEffect(() => {
    async function fetchCrewmate() {
      try {
        const { data, error } = await supabase
          .from('Crewmates')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setCrewmateInfo(data);
      } catch (error) {
        console.error('Error fetching crewmate:', error.message);
      }
    }
    fetchCrewmate();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrewmateInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateCrewmate = async (event) => {
    event.preventDefault();
    try {
      await supabase
        .from('Crewmates')
        .update(crewmateInfo)
        .eq('id', id);
      window.location = '/gallery'; // Redirect to the gallery after updating crewmate
    } catch (error) {
      console.error('Error updating crewmate:', error.message);
    }
  };

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <form onSubmit={updateCrewmate}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={crewmateInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Speed:
          <input
            type="number"
            name="speed"
            value={crewmateInfo.speed}
            onChange={handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={crewmateInfo.color}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Crewmate</button>
      </form>
    </div>
  );
};

export default EditCrewmate;
