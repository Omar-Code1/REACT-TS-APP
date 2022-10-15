import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import List from './components/List';
import Navbar from './components/Navbar';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTime = (): number => new Date().getTime();

  const addNewTask = (task: Task) =>
    setTasks([{ ...task, id: getTime() }, ...tasks]);
  const deleteATask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <div className="row">
          <div className="col-4">
            <Form addNewTask={addNewTask} />
          </div>
          <div className="col-8">
            <div className="row">
              <List tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
