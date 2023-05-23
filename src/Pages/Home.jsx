import React, { useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #e9f5f9; /* Light blue background color */
`;

export const Homepage = () => {
  const [fname, setFname] = useState([]);
    useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
      .then(response => {
        console.log(response.data.entries);
        setFname(response.data.entries);
      });
  },[]);

  return (
    <Container> 
      <h1>WELCOME TO MY HOMEPAGE!</h1>
    </Container>
  );
}

export default Homepage;