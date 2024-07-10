// src/App.js
import React from 'react';
import './styles.css';
import Gallery from './Gallery';
import Header from './Header';

const App = () => {
  const teamMembers = [
    {
      name: 'Emily Davis',
      role: 'Head of Marketing',
      photo: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/05/Marketing.jpeg.jpg',
    },
    {
      name: 'James Thompson',
      role: 'Social Media Manager',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sophia Wilson',
      role: 'Content Strategist',
      photo: 'https://images.squarespace-cdn.com/content/v1/581a8a72b8a79b7bef06ba28/1625421499574-MXOH0BWQDJXU346ADS2Y/content+strategy+in+ux.jpeg',
    },
    {
      name: 'Michael Brown',
      role: 'SEO Specialist',
      photo: 'https://www.freshgigs.ca/blog/wp-content/uploads/2013/06/What-Is-an-SEO-Specialist.jpg',
    },
    {
      name: 'Olivia Martinez',
      role: 'Marketing Analyst',
      photo: 'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/963146194RemoteMarketingManager.jpg=ws1280x960',
    },
  ];

  return (
    <div className="App">
      <Header />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
};

export default App;
