
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue ] = useState('')
  const [datas, setData] = useState([])
  const handleClick = () => {
    if(value === ''){
      return
    }
   /*  if(e.key==='Enter')
    {
      setData([...datas, value]);
      setValue("");
    } */
    setData([...datas, value]);
    setValue("");
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className='body'>
      <h1 className='header' >TODO-APP</h1>
      <input className='input' type="text" onChange={(e) => handleChange(e)} value={value} />
      <button className='button' onClick={ handleClick} >add todo</button>
      <ul className='list'>
      {datas.map((data, index) => (<li key={index} className='item'>{data}</li>) )}
      </ul>
    </div>
  );
}

export default App;
