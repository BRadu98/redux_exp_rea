const express = require('express')
const router = express.Router()
const axios = require('axios');

let users = [], images = [], combined = []

const getFakeUsers = async (page, limit) => {
  try {
    const response = await axios.get(`http://fakeapi.jsonparseronline.com/users?_page=${page}&_limit=${limit}&_seed=middleout`)
    users = response.data
  }
  catch (err) {
    console.log(err)
  }
}

const getFakeImages = async (limit) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users?limit=${limit}&select=firstName,age,image`)
    images = response.data.users
  }
  catch (err) {
    console.log(err)
  }
}

const combineFakeData = () => {
  users.map(user => {
    const {id, firstName, lastName, address: {city}} = user
    combined[id-1] = {lastName, city}
  })
  images.map(image => {
    const {id: userId, image: thumb} = image
    combined[userId-1].thumb = thumb.replace("=50x50","=250x250").replace("=set1","=set3")
  })
}

getFakeUsers(1,12)
getFakeImages(12)


router.get("/", (req, res) => {
  res.send("use users/protected?apikey=")
})

router.get("/protected", (req, res) => {
  combineFakeData()
  req.query.apikey === process.env.SECRET ? res.json(combined) : res.send("Use the correct api key")
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


