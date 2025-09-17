const { type } = require('os')
const sequelize=require('sequelize')
const db=new sequelize('college','root','',{
    host:"localhost",
    dialect:"mysql",
})

db.authenticate()
    .then(()=>{
        console.log("connection has been establised successfully")
    })
    .catch((err)=>{
        console.error("Unable to connect to the database:",err)
    })

// create model
const student=db.define("student",{
    id:{
        type:sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    city:{
        type:sequelize.STRING,
        allowNull:false
    },
    Email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true
    }
})

// sync model
student.sync()
    .then(()=>{
        console.log("student table created successfully")
    })
    .catch((err)=>{
        console.error("Unable to create table:",err)
    })

insert
student.create({
    name:"aayushi",
    city:"surat",
    Email:"aayushi@gmail.com",
})
    .then(()=>{
        console.log("Data inserted successfully")
    })
    .catch((err)=>{
        console.error("Unable to insert data:",err)
    })

student.findAll()
    .then(()=>{
        console.log("Data retrived successfully")
    })
    .catch((err)=>{
        console.error("Unable to fetch data:",err)
    })

student.findByPk(3)
    .then((student)=>{
        console.log(student)
    })
    .catch((err)=>{
        console.error("Unable to fetch data:",err)
    })

using Where
student.findAll({where:{city:"Rajkot"}})
    .then(()=>{
        console.log("Data retrived successfully")
    })
    .catch((err)=>{
        console.error("Unable to fetch data:",err)
    })

student.update({city:"Ahemdabad"},{where:{id:1}})
    .then(()=>{
        console.log("Data updated successfully")
    })
    .catch((err)=>{
        console.error("Unable to update data:",err)
    })

student.destroy({where:{id:3}})
    .then(()=>{
        console.log("Data deleted successfully")
    })
    .catch((err)=>{
        console.error("Unable to delete data:",err)
    })