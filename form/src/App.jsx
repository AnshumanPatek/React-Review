import './App.css'
  import { useState } from 'react'

function App() {
  const [inputName , setInputName] = useState('');
  const handleChange = (event) =>{
    setInputName (event.target.name);
  }
  return (
    <>
    <form>
      <label> Input Name :
      <input type ="text" value={inputName} onChange = {handleChange}></input>
</label>
<p>Input Name: {inputName}</p>
    </form>

    </>
  )
}

export default App
