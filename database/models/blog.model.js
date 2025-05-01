// Blog, BlogTitle, BlogDescription, Author, FeatureImage
const blogModel = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
        blogTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blogDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blogAuthor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blogFeatureImage: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Blog
}
module.exports = blogModel
