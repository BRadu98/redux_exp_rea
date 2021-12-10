const express = require('express')
const router = express.Router()
const axios = require('axios');
require('dotenv').config()

const getFakeUsers = async (page, limit) => {
  try {
    const response = await axios.get(`http://fakeapi.jsonparseronline.com/users?_page=${page}&_limit=${limit}&_seed=middleout`)
    users = response.data
  }
  catch (err) {
    console.log(err)
  }
}

let users = []
getFakeUsers(1,12)

router.get("/", (req, res) => {
  res.send("use users/protected?apikey=")
})

router.get("/protected", (req, res) => {
  req.query.apikey === process.env.SECRET ? res.json(users) : res.send("Use the correct api key")
})

// router.post('/', (req, res) => {  
//   users.push({ firstName: req.body.firstName })   
// })

//! Top - bottom, keep dynamic routes after static ones
// router
//   .route("/:id") //http://localhost:3000/users/1
//   .get((req, res) => {
//     console.log(req.user)
//     res.send(`get user with id: ${req.params.id}`)
//   })
//   .put((req, res) => {
//     res.send(`update user with id: ${req.params.id}`)
//   })
//   .delete((req, res) => {
//     res.send(`delete user with id: ${req.params.id}`)
//   })


//! Runs everytime it finds a param that matches the name passed to it
//! Middleware, runs before the routes above
// router.param("id", (req, res, next, id) => {
//   req.user = users[id]
//   next() //does not run any other code until next is called
// })

module.exports = router


