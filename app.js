const express = require("express")
const blogRoute = require("./routes/blogRoute")
const app = express()

//Below code helps express to understand json data.
app.use(express.json())

app.use("", blogRoute)

app.listen(process.env.PORT, () => {
    console.log("Project Connection Successfylly at "+ process.env.PORT)
})