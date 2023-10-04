import React from "react";
import Form from 'react-bootstrap/Form';

const Input = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="input">
            <Form.Label>ToDoS</Form.Label>
            <Form.Control type="text" placeholder="add task..." id="input" />
          </Form.Group>
        </Form>
      );
};
export default Input;