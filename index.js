const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
  {
    id: 1,
    name: "A",
    number: "2346512834512834",
  },
  {
    id: 2,
    name: "b",
    number: "38465234",
  },
  {
    id: 3,
    name: "C",
    number: "23423412345",
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.send(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  res.send(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id != id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  person.id = Math.floor(Math.random() * 100)
  console.log(person)
  res.send(person)
})

app.get('/info', (req, res) => {
  res.send(`<p>Phone book has ${persons.length} people</p><p>${Date()}</p>`)
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})