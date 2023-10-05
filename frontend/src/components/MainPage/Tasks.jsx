import React from 'react';
import { useSelector } from 'react-redux';
// import {
//  MDBTableBody, MDBTableHead,
// } from 'mdb-react-ui-kit';
import _ from 'lodash';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const getNumber = (array, item) => _.findIndex(array, item) + 1;

  return (
    <div className="table-responsive">
      <table className="mb-4 table-sm table-hover w-100">
        <thead className="table-warning">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th className="text-end" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className="align-top" key={task.id}>
              <th scope="row">{getNumber(tasks, task)}</th>
              <td>{task.name}</td>
              <td className="description">{task.description}</td>
              <td>{task.status}</td>
              <td className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="ms-1 btn btn-danger btn-sm mb-1"
                >
                  <span className="icon">
                    <i className="fas fa-trash" />
                  </span>
                </button>

                <button
                  type="submit"
                  className="ms-1 btn btn-success btn-sm mb-1"
                >
                  <span className="icon">
                    <i className="fas fa-check" />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
