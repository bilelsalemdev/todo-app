
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  const [data, setData] = useState([])
  const handleClick = () => {
    setData(...data, value)
    setValue('')
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
      values.map((value, index) => {
        <li key={index}>value</li>
      })
      </ul>
    </div>
  );
}

export default App;
