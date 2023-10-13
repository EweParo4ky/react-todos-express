import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';
import { actions as tasksActions } from '../../slices/tasksSlice';

const Input = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const tasks = useSelector((state) => state.tasks);
  console.log('TASKS', tasks);
  const dispatch = useDispatch();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      body,
      id: uuidv4(),
      status: 'In progress',
    };
    dispatch(tasksActions.addTask(newTask));
    setTitle('');
    setBody('');
  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      className="py-1 rounded-2 mb-4"
    >
      <Form.Group
        className="d-flex input-group rounded-2"
      >
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          className="border p-0 ps-2 me-2"
          type="text"
          ref={inputRef}
          required
          id="title"
          value={title}
          autoComplete="off"
          placeholder="Title..."
        />
        <Form.Control
          onChange={(e) => setBody(e.target.value)}
          className="flex-grow-1 border p-0 ps-2 w-25"
          type="text"
          id="description"
          value={body}
          autoComplete="off"
          placeholder="Description..."
        />
        <button className="btn btn-warning btn-group-vertical rounded-2 ms-2 text-dark" type="submit"><i className="fas fa-bookmark"> Save Task</i></button>
      </Form.Group>
    </Form>
  );
};

export default Input;
