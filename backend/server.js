const mongoose = require("mongoose")
const routes = require("./routes")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()
const port = 5000

dotenv.config()
app.use(express.json())
app.use(cors())

app.use("/api/v1", routes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch(error => console.log(error))

app.listen(port, () => console.log(`running on port localhost:${port}`))
