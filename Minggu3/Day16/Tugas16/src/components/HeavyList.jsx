import { useMemo } from "react";

export default function HeavyList({count}) {

    const items = useMemo(() => {
        console.log("HeavyList Diitung Ulang")
        let result = []
        for (let i = 0; i < 5000; i++) {
            result.push(i * 2)
        }
        return result.slice(0, count)
    },[count])

    return (
        <div>
            <h3>Heavy List ({count} items)</h3>
            <p>Data pertama: {items[0]}</p>
             <p>Data terakhir: {items[items.length - 50]}</p>
        </div>
    )
}