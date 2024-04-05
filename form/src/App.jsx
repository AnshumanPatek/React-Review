import "./App.css";
import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState("");
  const handleChange = (event) => {
    setInputName(event.target.value);
  };


  // Age

  const [inputAge, setInputAge] = useState("");
  const handleChangeAge = (event) => {
    setInputAge(event.target.value);
  };


  // email
  const [inputEmail, setInputEmail] = useState("");
  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };





  const [SelectedOption , setSelectedOption] = useState("Male");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  }









  return (
    <>
      <form>
        <label>
          Input Name :
          <input type="text" value={inputName} onChange={handleChange} />
        </label>
        {/* <p>Input Name: {inputName}</p> */}
      </form>

      <div>

        <label>
          Input Age :
          <input type="number" value={inputAge} onChange={handleChangeAge} />
        </label>
        {/* <p>Input Age: {inputAge}</p> */}

      </div>


      <div>

        <label>
          Input Email :
          <input type="email;" value={inputEmail} onChange={handleChangeEmail} />
        </label>
        {/* <p>Input Age: {inputEmail}</p> */}

      </div>





    <div>
      <label>
      Select an Gender:
      <select value = {SelectedOption}  onChange = {handleDropdownChange}>
        <option value="Male"> Male </option>
        <option value="Female"> Female </option>
        <option value="Transgender"> Transgender </option>
      </select>
      </label>
      {/* <p>Selected option : {SelectedOption}</p> */}
    </div>


    <button type="submit">Submit</button>





    </>
  );
}

export default App;
