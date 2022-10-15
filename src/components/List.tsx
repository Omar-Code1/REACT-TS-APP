import { Task } from '../types';
import Card from './Card';

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}

const List = ({ tasks, deleteATask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <Card key={task.id} task={task} deleteATask={deleteATask} />
      ))}
    </>
  );
};

export default List;
