
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  const [datas, setData] = useState([])
  const handleClick = (e) => {
    if(value === ''){
      return
    }
    if(e.key==='Enter')
    {
      setData([...datas, value]);
      setValue("");
    }
    setData([...datas, value]);
    setValue("");
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>TODO-APP</h1>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      <button onClick={(e) => handleClick(e)} >add todo</button>
      <ul>
      {datas.map((data, index) => (<li key={index}>{data}</li>) )}
      </ul>
    </div>
  );
}

export default App;
