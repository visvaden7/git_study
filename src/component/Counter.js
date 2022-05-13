import {useState} from "react";

export const Counter = ()=>{
    const [count, setCount] = useState(0);
    const plusCount= ()=> {
        setCount(count + 1);
    }
    const minusCount= ()=> {
        if(count > 0){
            setCount(count - 1);    
        }
    }
    return (
        <div>
            <h1>HELLO</h1>
            <h1>{count}</h1>
            <button onClick={plusCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    )
}