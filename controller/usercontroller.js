const router = require("express").Router()
const joi = require("joi")
const usermodel = require("../model/usermodel")
const {ObjectId} = require("mongodb")

router.get("/", async(req,res) =>{
    const user = await usermodel.findAll();
    res.status(200).send(user)
})
router.post("/insert",createSchema,async(req,res) =>{
    const user = await usermodel.post(req.body)
    res.status(200).send(user)
})
router.get("/singaluser/:id",async(req,res)=>{
    const id = new ObjectId(req.params.id)
    const user = await usermodel.find(id)
    res.status(200).send(user)
})
router.patch("/update/:id",async(req,res) =>{
    const id = new ObjectId(req.params.id)
    const user = await usermodel.updateUser(id,req.body)
    res.status(200).send(user)
})
router.delete("/delete/:id",async(req,res)=>{
    const id = new ObjectId(req.params.id)
    const user = await usermodel.deleteUser(id)
    res.status(200).send(user)
})

function createSchema(req,res,next){
    const schema = joi.object({
        company:joi.string().required(),
        employees:joi.number().required(),
        country:joi.string().required(),
        owner:joi.string().required()
    })
    const user = schema.validate(req.body)
    if(user.error){
        return res.json({
            status:"error",
            message:user.error.details[0].message
        })
    }
    return next()
}

module.exports = router