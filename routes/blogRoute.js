const { fetchAllBlog, createBlog, fetchSingleBlog, updateBlog, deleteBlog } = require("../controllers/blogController")

const router = require("express").Router()

router.route("/blogs").get(fetchAllBlog).post(createBlog)
router.route("/blogs/:id").get(fetchSingleBlog).patch(updateBlog).delete(deleteBlog)

module.exports = router