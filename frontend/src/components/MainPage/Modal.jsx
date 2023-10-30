import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { actions as tasksActions } from '../../slices/tasksSlice';
import { toggleModal } from '../../slices/modalSlice';

const EditModalWindow = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const currentTask = useSelector((state) => state.modal.currentTask);
  const [body, setBody] = useState(' ');

  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(() => {
    setBody(currentTask.body);
  }, [currentTask.body]);

  const handleClose = () => {
    dispatch(toggleModal(currentTask));
    setBody(currentTask.body);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tasksActions.editTask({ currentTask, body }));
    dispatch(toggleModal(currentTask));
  };

  console.log('INPUT REF', inputRef);

  return (
    <Modal show onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Edit description</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="visually-hidden">Edit task</Form.Label>
            <Form.Text className="text-muted">Edit your Task</Form.Text>
            <Form.Control
              onChange={(e) => setBody(e.target.value)}
              className="mb-2 mt-2"
              type="text"
              value={body}
              ref={inputRef}
              name="taskBody"
            />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => handleClose()}
                variant="warning"
                className="text-light fw-bold me-2"
              >
                Close
              </Button>
              <Button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                variant="success"
                className="fw-bold"
              >
                Save task
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditModalWindow;
