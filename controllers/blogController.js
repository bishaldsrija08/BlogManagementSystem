const { blogs } = require("../database/connection")

//get all blogs
exports.fetchAllBlog = async (req, res) => {
    //logic to fetch all blogs goes here
    const data = await blogs.findAll()
    res.json({
        message: "Blog fetched successfully.",
        data
    })
}

//get single blog
exports.fetchSingleBlog = async (req,res)=>{
    const id = req.params.id
    const data = await blogs.findByPk(id) //returns object
    res.json({
        message: "Single fetched successfully!",
        data
    })
}

//Detelet blog
exports.deleteBlog= async(req, res) => {
    const id = req.params.id
    await blogs.destroy({ where: { id:id } })
    res.json({
        message: "Blog deleted successfully"
    })
    res.json({
        message: "Invalid request"
    })
}

//update blog
exports.updateBlog= async(req,res)=>{
    const id = req.params.id
    const blogTitle = req.body.blogTitle
    const blogDescription = req.body.blogDescription
    const blogAuthor = req.body.blogAuthor
    const blogFeatureImage = req.body.blogFeatureImage

    await blogs.update({
        blogTitle,
        blogDescription,
        blogAuthor,
        blogFeatureImage
    }, {
        where: {id:id}
    })

    res.json({
        message: "blog updated successfully."
    })
}

//create blogs
exports.createBlog = async (req, res) => {
    const { blogTitle, blogDescription, blogAuthor, blogFeatureImage } = req.body
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
}