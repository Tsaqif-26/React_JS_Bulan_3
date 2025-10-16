import { useState } from "react";

export function useCounter() {

    const [count, setCount] = useState(0)

    const increment = () => setCount((c) => c + 1)
    const decrement = () => setCount((c) => c - 1)

    return {count, increment, decrement}
}

export function useToggle () {

    const [on, setOn] = useState(false)

    const toggle = () => setOn((o) => !o)

    return {on, toggle}
}

export function useCounterToggle() {
    const counter = useCounter()
    const toggle = useToggle()

    return {...counter, ...toggle}
}