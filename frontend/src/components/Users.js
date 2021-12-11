import React from 'react'
import users from './Users.module.css'
import User from './User'

const Users = (props) => {
  const {data} = props
  console.log(33, data)
  // if(!data) return("No data")

  return (
    <>
      { data && data.map((userData) => <User key={`${userData.thumb}`} data={userData}/>)}
    </>
  )
}

export default Users