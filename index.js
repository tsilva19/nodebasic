const express = require("express")
const bodyParser = require("body-parser")

const championsRoute = require('./routes/championsRoute')
const port = 3000

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


championsRoute(app)

app.get('/', (req,res) => res.send("Ola mundo pelo express"))


app.listen(port , () => console.log("Api Rodando na porta 3000"))