const express = require("express")

const campeaoRoute = require('./routers/campeaoRoute')

const app =express()
const port = 3000

app.get('/', (req,res) => res.send("Ola mundo pelo express"))


app.listen(port , () => console.log("Api Rodando na porta 3000"))