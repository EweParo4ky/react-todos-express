import React from 'react';
import { Container } from 'react-bootstrap';

const Main = () => {
  const a = 'test';
  console.log(a);
  return (
    <div className="d-flex flex-column h-100">
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-light flex-md-row">
          <p>Место под Таски</p>
          <p>Input</p>
          <p>Tasks</p>
        </div>
      </Container>
    </div>
  );
};
export default Main;
