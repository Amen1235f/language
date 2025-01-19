import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary modules
import Interface from './Interface/Interface';
import Work from './Work/Work';
import VideoCall from './VideoCall/VideoCall';
import Exercises from './Exercises/Exercises';

function App() {
  return (
    <Router> {/* Set up Router for navigation */}
      <div>
        <Routes>
          {/* Define the routes for each component */}
          <Route path="/" element={<Interface />} />
          <Route path="/work" element={<Work />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/ex" element={<Exercises />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
