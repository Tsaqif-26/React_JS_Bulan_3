import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { decrement, decrementByValue, increment, incrementByValue } from "../features/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return <>
        <h1>Count: {count}</h1>
 
        <button onClick={() => dispatch(decrementByValue(5))}>Kurang 5</button>
        <button onClick={() => dispatch(decrement())}>Kurang</button>     
        <button onClick={() => dispatch(increment())}>Tambah</button>    
        <button onClick={() => dispatch(incrementByValue(10))}>Tambah 10</button>    

    </>
}