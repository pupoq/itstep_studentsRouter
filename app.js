const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const studentsRouter = require('./routers/studentsRouter')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/students', studentsRouter)

app.listen(5050)