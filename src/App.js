import './App.css';
import { CatFactGenerator } from './components/CatFactGenerator';
import { Todo } from './components/Todo';

function App() {
  return (
    //React Fragment
    <>
      <h1>Lista de Tareas</h1>

      <Todo></Todo>
      
    </>
  );
}

export default App;
