const express = require('express')

const app = express()

app.use(express.static("public")) //Serve all files from public
app.use(express.urlencoded({extended: true})) //read body of req
app.use(express.json()) //to allow (fetch from client to server/or call an api to use) json from the body

// app.set('view engine', 'ejs') // or 'pug'
app.use(logger) //middleware

const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')

app.use('/users', userRouter)
// app.use('/posts', userRouter)

function logger(req, res, next) {
  console.log( req.originalUrl )
  next()
}

app.listen(3000)

