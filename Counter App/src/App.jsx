import { useState } from "react";

import "./App.css";
import dispe from "./assets/disp";


function App() {
  const [count, setCount] = useState(0);

  const incNum = () => {
    // count++;
    setCount(count + 1);
  };
  const decNum = () => {
    // count++;

    count === 0 ? setCount(0) : setCount(count - 1);
  };
  return (
    <>
           {/* <div>{count}</div> <br /> <br />
       <div className="maindiv">
       <button onClick={incNum}>Inc</button>
        <button onClick={decNum}>Dec</button>
       </div>
     */}
     <dispe  count = {count} incNum={incNum} decNum={decNum} />
    </>
  );
}

export default App;
