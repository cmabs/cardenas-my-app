import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #e9f5f9; /* Light blue background color */
`;

export const Homepage = () => {
  return (
    <Container> 
      <h1>WELCOME TO MY HOMEPAGE</h1>
    </Container>
  );
}

export default Homepage;