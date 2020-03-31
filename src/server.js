require('dotenv').config()
const { SERVER_PORT = 3001 } = process.env

const express = require('express')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(routes)

server.listen(SERVER_PORT)
