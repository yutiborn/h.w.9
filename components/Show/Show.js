import {React, users} from 'react'
import Button from '../Button/Button'
import './Show.css'

const Show = ({user, users, setUsers}) => {
  return (
      <div className='card'>
    <div><img src={user.avatar_url}/></div>
    <h2>{user.login}</h2>
    <h3>Created At: {user.created_at.split("T")[0]}</h3>
    <h4>{user.public_repos} repositores</h4>
    <Button text = {"reset"} clickEvent={() =>{
        setUsers(users.filter(el=>el!==user))}}/>
    </div>

  )
}

export default Show
