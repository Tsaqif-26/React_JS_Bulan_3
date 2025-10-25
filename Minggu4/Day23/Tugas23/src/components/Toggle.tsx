import { useState } from "react";

interface ToggleProps {
    render: (props: {on: boolean; toggle: () => void}) => React.ReactNode
}

const Toggle: React.FC<ToggleProps> = ({render}) => {

    const [on, setOn] = useState(false)

    const toggle = () => setOn((prev) => !prev)

    return <>{render({on, toggle})}</>
}

export default Toggle