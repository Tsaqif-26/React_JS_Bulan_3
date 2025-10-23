
interface BaseUser {
  id: number
  name: string
  email: string
  age: number
  isActive: boolean
}

type UserCardProps = Pick<BaseUser, "name" | "email" | "age">

type EditableUser = Partial<BaseUser>

const perms: Record<string, boolean> = { canEdit: true, canDelete: false };

export default function UserCard({ name, email, age }: UserCardProps) {
  return (
    <div >

      <h3 >{name}</h3>
      
      <div>{email}</div>
      
      <div >Umur: {age}</div>
      
      <div>
      
        Edit: {perms.canEdit ? "Ya" : "Tidak"} | Delete: {perms.canDelete ? "Ya" : "Tidak"}
      
      </div>
    
    </div>
  );
}
