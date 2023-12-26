import React, { useState } from "react";

const App = () => {
const [count,setCount]=useState(0);
// const[count,setCount]=useState(0);
function decHandler(){
  setCount(count-1);
}
function incHandler(){
  setCount(count+1);
}

function resetHandler(){
  setCount(0);
}

  return <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    <div className="text-[#398d4] text-sky-600 text-2xl">
     Increment && Decrement
    </div>
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
      <button onClick={decHandler} className="border-r-2 text-center text-5xl w-20 border-[#bfbfbf]">
        -
        </button>
      <div className="font-bold text-5xl  gap-12">{count}</div>
      <button onClick={incHandler}  className="border-l-2 text-center text-5xl w-20 border-[#bfbfbf]" >
        +
        </button>
    </div>
    <button onClick={resetHandler} className="text-2xl bg-sky-500 rounded-sm w-28">Reset</button>
  </div>;
};

export default App;