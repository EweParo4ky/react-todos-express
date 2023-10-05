import React from 'react';
import { useSelector } from 'react-redux';
import {
  MDBTable, MDBTableBody, MDBTableHead, MDBBtn,
} from 'mdb-react-ui-kit';
import _ from 'lodash';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const getNumber = (array, item) => _.findIndex(array, item) + 1;

  return (
    <div>
      <MDBTable className="mb-4">
        <MDBTableHead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{getNumber(tasks, task)}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <MDBBtn type="submit" color="danger">
                  Delete
                </MDBBtn>

                <MDBBtn type="submit" color="success" className="ms-1">
                  Finished
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Tasks;
