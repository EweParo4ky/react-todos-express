import React from 'react';
import { Container } from 'react-bootstrap';

import Input from './Input';
import Tasks from './Tasks';

const Main = () => {
  const a = 'test';
  console.log(a);
  return (
    <div className="d-flex flex-column h-100">
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <div className="h-100 bg-light flex-md-row">
          <h4 className="text-center my-3 pb-3">To Do APP</h4>
          <Input />
          <Tasks />
          <div id="loader" />
        </div>
      </Container>
    </div>
  );
};
export default Main;
