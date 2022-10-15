import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../types';

const initialState = {
  title: '',
  description: '',
};

const initialStateError = {
  title: false,
  description: false,
};

interface Props {
  addNewTask: (task: Task) => void;
}

const Form = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(initialState);
  const [error, setError] = useState(initialStateError);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTask(() => ({
      ...task,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.title.trim()) {
      setError(() => ({ ...error, title: true }));
      return;
    }
    if (!task.description.trim()) {
      setError(() => ({ ...error, description: true }));
      return;
    }
    setError(initialStateError);
    addNewTask(task);
    setTask(initialState);
  };

  return (
    <>
      <div className="card card-body bg-light p-3">
        <h5 className="card-title mb-3">Add Task</h5>

        <form onSubmit={handleSubmit} className="needs-validation">
          <input
            className={`form-control mb-3 ${error.title && 'is-invalid'}`}
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleChange}
            value={task.title}
          />
          <textarea
            className={`form-control mb-3 ${error.description && 'is-invalid'}`}
            name="description"
            placeholder="Write a description"
            onChange={handleChange}
            value={task.description}
          />
          <button className="btn btn-primary">Add task</button>
        </form>
      </div>
    </>
  );
};

export default Form;
