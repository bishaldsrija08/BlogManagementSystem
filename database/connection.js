const {Sequelize, DataTypes}=require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)
console.log(process.env.DATABASE_URL)

sequelize.authenticate().then(()=>{
    console.log("Database connect vayo!")
}).catch((e)=>{
    console.log("Error",e)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db