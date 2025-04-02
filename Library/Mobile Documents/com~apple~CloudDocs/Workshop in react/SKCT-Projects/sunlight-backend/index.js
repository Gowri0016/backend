const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

console.log(process.env.DB)

let mongoDBStatus;

mongoose.connect(process.env.DB)
.then(() => {
    console.log("MongoDB connected successfully")
    mongoDBStatus=true
})
.catch((err) =>{
    mongoDBStatus=false
    console.log("Network error",err)
})


const UserSchema = mongoose.model("sunlight-users", {
    username: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true}
})

app.post('/create-user',async (req,res)=>{
    try{

        const {username, password, phone} = req.body

        if(!username || !password || !phone){
            return res.send({success: false, message: "Please provide all details!"})
        }
        else{
            const user = {username, password, phone}
            if(!user){
                return res.send({success: false, message: "Failed to create user!"})
            }
            const saveUser = new UserSchema(user)
            await saveUser.save()
            return res.send({success: true, message: "User saved succesfully!"})
        }

    }
    catch(err){
        console.log("Error in creating user:",err)
        return res.send({success : true , message : "Trouble in creatung User!"})
    }
})




app.listen(process.env.PORT, () =>
{
    console.log("Server running on port", process.env.PORT)
})