import React, { useState, useRef } from 'react';
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
  const [body, setBody] = useState(currentTask.body);
  console.log('BODY', body);
  console.log('CurrentTask in Modal Slice', currentTask.body);
  const isOpened = useSelector((state) => state.modal.isOpened);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const handleClose = () => {
    dispatch(toggleModal(currentTask));
    setBody(currentTask.body);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tasksActions({ currentTask, body }));
  };

  console.log('INPUT REF', inputRef);
  console.log('isOpened', isOpened);

  return (
    <Modal show={isOpened} onHide={() => handleClose()}>
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
              className="mb-2"
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
                // onClick={(e) => handleSubmit(e)}
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
