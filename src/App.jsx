import { useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16'>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
// https://youtu.be/r-m3L3m2IW8?si=uE4i4S4xnlpn7LAI - 22:31
