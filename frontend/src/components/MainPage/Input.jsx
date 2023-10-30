import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';
import { actions as tasksActions } from '../../slices/tasksSlice';

const Input = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reqStatus, setReqStatus] = useState('waiting');
  const tasks = useSelector((state) => state.tasks);
  console.log('TASKS', tasks);
  const dispatch = useDispatch();
  const requestUrl = '/api/server';
  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setReqStatus('loading');
      try {
        const response = await axios.get(requestUrl);
        dispatch(tasksActions.setTasks(response.data));
        setReqStatus('loaded');
      } catch (error) {
        console.error(error);
        setReqStatus('errror');
      }
      setReqStatus('waiting');
    };
    fetchData();
  }, [dispatch]);

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
    <Form onSubmit={(e) => handleSubmit(e)} className="py-1 rounded-2 mb-4">
      <Form.Group className="d-flex input-group rounded-2">
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
        <button
          disabled={reqStatus === 'loading'}
          className="btn btn-warning btn-group-vertical rounded-2 ms-2 text-dark"
          type="submit"
        >
          <i className="fas fa-bookmark"> Save Task</i>
        </button>
      </Form.Group>
      {reqStatus !== 'loading' && (
        <div className="mt-2 d-flex justify-content-center">
          <div
            className="spinner-border text-warning"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </Form>
  );
};

export default Input;
