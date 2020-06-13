import React from 'react';
import Routes from './Routes/PublicRoutes.jsx'
import Navbar from './Component/Navbar'
function App() {
  return (
    <div className='container mb-5'>
      <div className='m-4 text-light'>
        <h2>Ticket Management System</h2>
        <h6>Online Ticket Managemnet and Support System</h6>
      </div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
