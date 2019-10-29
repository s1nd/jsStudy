let http = require("http")
let url = require("url")
let path = require("path")
let mime = require("./http2mime")
let fs = require("fs")

var server = http.createServer(function(req, res){
   
    let reqPath = "." + url.parse(req.url).pathname;
    let filePath;
    if(reqPath === './'){
        filePath = "./home.html"
    }else{
        filePath = "./index.html"
    }
    fs.exists(filePath, function(exists){
        if(exists){
            let data = fs.readFileSync(filePath)
            let contentType = mime[path.extname(filePath)]
            res.writeHead(200, {
               'content-type': contentType
            })
            res.write(data)
            res.end()
            res.end("404 not found")
        }
    })
})
server.listen(3003, function(){
    console.log("3003 is listening")
})