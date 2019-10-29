const mongoose = require("mongoose")
const uri = "mongodb://localhost/login"
mongoose.connect(uri, function(err){
    if(err){
        console.log(err)
    }
    console.log("connect success")
})
const userInfoSchema = new mongoose.Schema({
    username: String,
    password: String
})
mongoose.model("user", userInfoSchema)
const user = mongoose.model("user")

const user1 = new user({
    username: "tom",
    password: "456"
})

// user1.save(function(err){
//    if(err){
//         console.log(err)
//    }else{
//        console.log("save success")
//    }
// })
module.exports = user


