const express = require("express")
const { blogs } = require("./database/connection")
const app = express()

//Below code helps express to understand json data.
app.use(express.json())

app.get("/blogs", async (req, res) => {
    //logic to fetch all blogs goes here
    const data = await blogs.findAll()
    res.json({
        message: "Blog fetched successfully.",
        data
    })
})

app.post("/blogs", async (req, res) => {
    const {blogTitle, blogDescription, blogAuthor, blogFeatureImage} = req.body
    if (blogTitle && blogDescription && blogAuthor && blogFeatureImage) {
        await blogs.create({
            blogTitle,
            blogDescription,
            blogAuthor,
            blogFeatureImage
        })
        res.json({
            status: 200,
            message: "Blog created successfully"
        })

    } else {
        res.json({
            message: "Please provide all the information."
        })
    }
})

app.listen(3000, () => {
    console.log("Project Connection Successfylly")
})