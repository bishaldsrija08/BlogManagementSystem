const { Sequelize, DataTypes } = require("sequelize")
const blogModel = require("./models/blog.model")

const sequelize = new Sequelize(process.env.DATABASE_URL)
console.log(process.env.DATABASE_URL)

sequelize.authenticate().then(() => {
    console.log("Database connect vayo!")
}).catch((e) => {
    console.log("Error", e)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.blogs = blogModel(sequelize, DataTypes)

//Migration of database goes here
sequelize.sync({alter: false}).then(()=>{
    console.log("Migratin succssfylly!")
})

module.exports = db