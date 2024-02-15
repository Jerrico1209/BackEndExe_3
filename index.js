const morgan = require('morgan')
const express = require('express')
const moment = require('moment')
const members = require('./members')
const users = require('./users')

const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(morgan('tiny'))

app.get ('/', (req, res) => res.send('This is te home page'))

app.get ('/about', (req, res) =>
    res.status(200).json({
        status: "Success",
        message: "response Sucess",
        Decription: 'Exercise #2',
        date: moment().format(),
        data: members
    })
)

app.get('/users', (req, res) =>
    res.status(200).json({
        status:'Success',
        message: "Response Success",
        data: users
    }))

app.use((req, res, next) =>{
    res.status(404).json({
        status: "ERROR",
        message: "NOT FOUND"
    })
    next()
})

app.listen(port , () => {
    console.log(`server running at http://${hostname}:${port}`)
})
