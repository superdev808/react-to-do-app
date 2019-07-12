const http = require('http')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 4000

//DB CONNECTION
require('./src/database/connection')
require('./src/bootstrap')()

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()
app.use(router)

const rootPath = path.resolve('./dist')
app.use(express.static(rootPath))