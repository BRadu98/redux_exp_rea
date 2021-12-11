import React from 'react'
import user from './User.module.css'

const User = ({data: {city, thumb, lastName}}) => {
  console.log(55,city)
  return (
    <>
      <p>User</p>
      <h2>{lastName}</h2>
      <h3>{city}</h3>
      <img src={thumb} alt={lastName}></img>
    </>
  )
}

export default User