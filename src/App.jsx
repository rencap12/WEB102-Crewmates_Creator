// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Adjusted file name
import Gallery from './components/gallery'; // Adjusted file name
import EditCrewmate from './components/editCrewmate';
import Layout from './components/layout';
import CrewmateDetails from './components/oneInfo';
import './App.css';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
          <Route path="/crewmate/:id" element={<CrewmateDetails />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
