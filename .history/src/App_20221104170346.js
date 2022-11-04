
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  const [datas, setData] = useState([])
  const handleClick = () => {
    setData(...datas, value)
    setValue('')
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>TODO-APP</h1>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      <button onClick={handleClick} >add todo</button>
      <ul>
      {datas.map((data, index) => (<li key={index}>{data}</li>) )}
      </ul>
    </div>
  );
}

export default App;
