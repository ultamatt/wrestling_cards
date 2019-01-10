import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 8px;
`;

const Name = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;

const Wrestler = () => {
    return (
        <Container>
            <Thumbnail />
            <Name>Hulk Hogan</Name>
        </Container>
    );
};

export default Wrestler;
