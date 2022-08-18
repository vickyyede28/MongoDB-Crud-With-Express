const express =  require("express")
const app =  express()
app.use(express.json())

const connect = require("./mongodb/db")
const controller = require("./controller/usercontroller")

app.get("/",controller)
app.post("/insert",controller)
app.get("/singaluser/:id",controller)
app.patch("/update/:id",controller)
app.delete("/delete/:id",controller)


app.listen(6600,async()=>{
    await connect.dbConnect()
    console.log('Your Server is successfully connected to the Server 6600');
})