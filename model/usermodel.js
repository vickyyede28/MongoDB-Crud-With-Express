// const { query } = require("express")
const db = require("../mongodb/db")

const findAll = async()=>{
    return db.get().collection("informations").find().toArray()
}
const post =async(data)=>{
    return db.get().collection("informations").insertOne(data)
}
const find = async(data)=>{
    return db.get().collection("informations").findOne({_id:data})
}
const updateUser = async(query,data)=>{
    return db.get().collection("informations").updateOne({_id:query},{$set:data})
}
const deleteUser = async(data)=>{
    return db.get().collection("informations").deleteOne({_id:data})
}

module.exports= {
    findAll,
    post,
    find,
    updateUser,
    deleteUser
}