const express = require('express')
const path = require("path")

const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "money.html"))
})

app.get("/pennies", (req, res) => {
  let ans = (parseFloat(req.query.dollars) * 100)
  res.send(ans.toString())
})

app.get("/nickels", (req, res) => {
  let ans = (parseFloat(req.query.dollars) * 100 / 5)
  res.send(ans.toString())
})

app.get("/dimes", (req, res) => {
  let ans = (parseFloat(req.query.dollars) * 100 / 10)
  res.send(ans.toString())
})

app.get("/quarters", (req, res) => {
  let ans = (parseFloat(req.query.dollars) * 100 / 25)
  res.send(ans.toString())
})

app.listen(3000, () => {
  console.log("server is listening to port 3000")
})