import { useState } from "React";


const initialState = () => {
  console.log("initial");
  
  return 0;
}

export default function App() {
  const [count, setCount] = useState(() => initialState());
  
  const handleClick = () => {
    setCount(count + 1);
  }


  return (
    <div className="">
      <button onClick={handleClick} className="btn btn-primary">
        {count}
      </button>
    </div>
  );
}

