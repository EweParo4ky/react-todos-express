import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { actions as tasksActions } from '../../slices/tasksSlice';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const getNumber = (array, item) => _.findIndex(array, item) + 1;
  const dispatch = useDispatch();

  return (
    <div className="table-responsive">
      <table className="mb-4 tale table-sm table-hover w-100">
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
              <td className={task.done ? 'done' : null}>{task.title}</td>
              <td className={`description ${task.done ? 'done' : null}`}>{task.body}</td>
              <td
                className={`${task.done ? 'text-success text-bold' : 'text-warning'}`}
                style={{ fontWeight: 'bold' }}
              >
                {`${task.done ? 'Finished' : 'In progress'}`}
              </td>
              <td className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={() => dispatch(tasksActions.deleteTask(task.id))}
                  className="ms-1 btn btn-danger btn-sm mb-1"
                >
                  <span className="icon">
                    <i className="fas fa-trash" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => dispatch(tasksActions.finishTask(task))}
                  className={`ms-1 btn btn-success btn-sm mb-1 ${task.done ? 'active' : null}`}
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
