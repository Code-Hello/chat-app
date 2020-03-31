import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact name="Terri Lowe" avatar="https://randomuser.me/api/portraits/women/23.jpg" online />
      <Contact name="Ramon Hunt" avatar="https://randomuser.me/api/portraits/men/4.jpg" />
      <Contact name="Mildred Mendoza" avatar="https://randomuser.me/api/portraits/women/54.jpg" online />
    </div>
  );
}

export default App;
