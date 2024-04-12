import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import '../App.css';

const Home = () => {
  const [postInfo, setPostInfo] = useState({
    name: '',
    speed: 0,
    color: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const createPost = async (event) => {
    event.preventDefault();
    try {
      await supabase
        .from('Crewmates')
        .insert(postInfo)
        .select();

      window.location = "/";
    }
    catch {
      console.log('did not post to supabase');
    }
  };

  return (
    <div className="container">
      <h1>Let's Create your Crewmates!</h1>
      <img src="src\home.jpg" alt="home pic" /> 
      <div className="form-container">
        <form onSubmit={createPost}>
          <div className="input-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={postInfo.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Speed:
              <input
                type="number"
                name="speed"
                value={postInfo.speed}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={postInfo.color}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Create Crewmate</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
