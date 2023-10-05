import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';
import { actions as tasksActions } from '../../slices/tasksSlice';

const Input = () => {
  const [name, setName] = useState('');
  console.log('task name', name);
  const [description, setDescription] = useState('');
  console.log('task description', description);
  const tasks = useSelector((state) => state.tasks);
  console.log('TASKS', tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name,
      description,
      id: uuidv4(),
      status: 'In progress',
    };
    dispatch(tasksActions.addTask(newTask));
    setName('');
    setDescription('');
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
          onChange={(e) => setName(e.target.value)}
          className="border p-0 ps-2 me-2"
          type="text"
          required
          value={name}
          autoComplete="off"
          placeholder="Task name..."
        />
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          className="flex-grow-1 border p-0 ps-2 w-25"
          type="text"
          required
          id="description"
          value={description}
          autoComplete="off"
          placeholder="Description..."
        />
        <button className="btn btn-warning btn-group-vertical rounded-2 ms-2" type="submit"><i className="fas fa-bookmark"> Save Task</i></button>
      </Form.Group>
    </Form>
  );
};

export default Input;
