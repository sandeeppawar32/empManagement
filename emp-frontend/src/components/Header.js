import React from 'react'
import{Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        Add new User 
          <Link to="/addUser" >Add user</Link>  
        </div>
  )
}
