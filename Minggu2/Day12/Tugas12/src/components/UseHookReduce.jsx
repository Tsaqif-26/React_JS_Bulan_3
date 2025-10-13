import { useReducer } from "react";

function CounterReducer(state,action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count -1}
        case 'reset':
            return {count: 0}
        default:
        throw new Error();
    }
}

export default function CounterWithReducer() {

    const [counterState, dispatch] = useReducer(CounterReducer, {count: 0})

    return (
        <div style={{
        textAlign: "center",
        marginTop: "60px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>

            <h2>Counter With Reducer</h2>

            <h3>Count: {counterState.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Kurang</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}