const http = require("http")
const queryString = require("querystring")
const user = require("./mongo2")
let server = http.createServer(function(req, res){
    let reqbody = ""  
    req.on("data",function(data){
        reqbody += data
        // console.log(reqbody)
        // data = data.toString()
        let userInfo = queryString.parse(reqbody)
        // console.log(data.toString())
        
    })
    req.on("end", function(){
       
        let userInfo = queryString.parse(reqbody)
        
        res.statusCode = 200
        res.sendDate = false
        res.setHeader("Content-Type","text/plain")
        res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
       
        

        console.log(userInfo)
        user.findOne({
            username: userInfo.un,
            password: userInfo.ps
        }, function(err, sb){
            if(err){
                console.log(err)
            }else{
                //userInfo in come from front end,userTom is come from mongodb
                if(sb){
                    
                    res.write("your name:'tom'")
                }else{
                    console.log(sb)
                    res.write("login failed")
                }
                res.end()
            }
        }) 
       
    })
    // reqbody = query.parse(reqbody)
    // console.log(reqbody)
    // res.end()
})
server.listen("3000", function(){
    console.log("starting")
})