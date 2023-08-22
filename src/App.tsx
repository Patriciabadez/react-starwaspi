import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/character-list" element={<CharacterList />} />
        <Route path="/character-details/:characterUrl" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
