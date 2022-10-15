import { Task } from '../types';

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

const Card = ({ task, deleteATask }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body bg-light p-3 m-2 ">
        <h5 className="car-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => task.id && deleteATask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
