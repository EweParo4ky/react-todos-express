import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Input from './Input';
import Tasks from './Tasks';
import Modal from './Modal';

const Main = () => {
  const isOpened = useSelector((state) => state.modal.isOpened);
  return (
    <div className="d-flex flex-column h-100">
      <Container className="h-100 my-4 overflow-hidden rounded shadow container-xxl">
        <div className="h-100 bg-light flex-md-row">
          <h4 className="text-center my-3 pb-3">To Do APP</h4>
          {isOpened && <Modal />}
          <Input />
          <Tasks />
        </div>
      </Container>
    </div>
  );
};
export default Main;
