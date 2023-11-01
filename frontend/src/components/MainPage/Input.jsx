/* eslint-disable consistent-return */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { actions as tasksActions } from '../../slices/tasksSlice';
import Loader from '../Loader';

export const request = async (url, method = 'GET', data = null) => {
  try {
    const headers = {};
    let body;
    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }
    const resp = await axios({
      url,
      method,
      headers,
      data: body,
    });
    return resp.data;
  } catch (error) {
    console.warn('Error: ', error.massege);
  }
};

const Input = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reqStatus, setReqStatus] = useState('waiting');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const requestUrl = '/api/tasks';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      body,
    };
    const response = await request(requestUrl, 'POST', newTask);
    dispatch(tasksActions.addTask(response));
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
      {reqStatus === 'loading' && <Loader />}
    </Form>
  );
};

export default Input;
