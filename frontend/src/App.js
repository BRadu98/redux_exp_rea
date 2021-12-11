// import './App.css';
import Button from './components/Button.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Users from './components/Users.js'

function App() {
  const [usersData, setUsersData] = useState()

  //fetch on page load //put async function inside
  // useEffect(async () => {
  //   const data = await handleFetch()
  //   setUsersData(data)
  // }, [])

  const handleFetch = () => {
    return axios.get(process.env.REACT_APP_BACKEND_URL)
    .then(res => {
      const {data} = res
      setUsersData(data) 
    })
    .catch(err => {
      console.error(err)
    })
  }

  const handleClick = () => {
    console.log("make me yellow")
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>w2o3</p>
        <Button onClick={handleClick}>Color</Button>
        <Button onClick={handleFetch}>Show Users</Button>
        {usersData && <Users data={usersData}></Users> }
      </header>
    </div>
  );
}

export default App;
