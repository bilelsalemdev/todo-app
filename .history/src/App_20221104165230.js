
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  const handleClick = (e) => {

  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>TODO-APP</h1>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleClick} >add todo</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;
