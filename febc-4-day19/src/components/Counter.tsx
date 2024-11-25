
import { useState } from 'react'



type CounterProps = {
  children:ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>
  handleIncreaseCount : () => void;
  handleDecreaseCount : () => void;
  color:string;
};

function Counter({
  setCount,
  children,
  handleIncreaseCount,
  handleDecreaseCount,
  color
}:CounterProps){
  return (
    <div>
      {children}
      <button onClick={handleIncreaseCount}  style={{backgroundColor: color,}} 
      >Increase</button>
      <button onClick={handleDecreaseCount}>Decrease</button>
    </div>
  )

}


export default Counter
