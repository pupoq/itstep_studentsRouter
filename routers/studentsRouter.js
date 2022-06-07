const { Router } = require('express')
const express = require('express')

const studentsRouter = express.Router()

const studentsArray = []

studentsRouter.get('/', (req, res) => {
    res.json(studentsArray)
})

studentsRouter.post('/', (req, res) => {
    let {fullName, age, login, password} = req.body

    let newStudent = {fullName, age, login, password}
    studentsArray.push(newStudent)

    res.status(200).send('Student added')
})

module.exports = studentsRouter