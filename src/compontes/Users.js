import React from 'react'
import UserCard from './UserCard'

const Users = ({users}) => {
    return (
        <div style={{display:"flex"}}>
            {users.map((el, i)=>(<UserCard key={i} person={el} />))}
        </div>
    )
}

export default Users
