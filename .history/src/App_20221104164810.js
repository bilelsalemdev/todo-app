
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  return (
    <div>
      <h1>TODO-APP</h1>
      <input type="text" />
      <button>add todo</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;
