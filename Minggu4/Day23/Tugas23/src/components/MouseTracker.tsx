import { useEffect, useState } from "react";

interface MouseTrackerProps {
    render: (state: {x: number; y: number}) => React.ReactNode
}

const MouseTracker: React.FC<MouseTrackerProps> = ({render}) => {
    
    const [pos, setPos] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPos({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', handleMove)
    },[])

    return <>{render(pos)}</>
}

export default MouseTracker
