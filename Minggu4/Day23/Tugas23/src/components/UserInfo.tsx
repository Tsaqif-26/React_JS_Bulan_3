import { FC } from "react"

interface UserInfoProps{
    name: string
}

const UserInfo: FC<UserInfoProps> = ({name}) => {
    return <h3>Hello, {name}</h3>
}

export default UserInfo