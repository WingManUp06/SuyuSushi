const express = require("express")
const app = express()

app.use(express.static("static"))


app.listen(5000);