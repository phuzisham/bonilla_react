import React from 'react'

const UserBlock = ({user}) =>
  <div key={user.id}>
    <h4>{user.name}</h4>
    <p>{user.email}</p>
  </div>

export default UserBlock
