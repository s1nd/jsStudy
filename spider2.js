const request = require("request")
const fs = require("fs")
const path = require("path")
//target site
//little yellow face emoji

//pandas emoji
const baseUrl = "http://www.doutula.com/search?type=photo&more=1&keyword=熊猫&page="

//save path
const savePath = "H:\\photo"

// for(var i=1;i<=10;i++){
    let encodeUrl = encodeURI(baseUrl+5)
    getDom("http://www.doutula.com/search?type=photo&more=1&keyword=%E7%86%8A%E7%8C%AB&page=10")
// }


// let domStr = ""
function downImg(urlArray){
    let ext

    urlArray.forEach((aUrl,i) => {
        // extension name
        ext = path.extname(aUrl)
        try{
            request(aUrl).pipe(fs.createWriteStream(path.join(savePath, i +"pandas10" + ext)))
            console.log("get " + i + " pic...")
        }catch{
            console.log("[downerror-]")
        }
    });
}
function findImg(dom){
    let re = /data-backup="http((?!").)*?\.(jpg|png|gif)"/g;
    // let re1 = /data-original="http((?!").)*?\.(jpg|png|gif)"/g;
    
    //  let re2 = /src="((?!").)*?\.(jpg|png|gif)"/g
    // console.dir(dom.match(re2)[0])
    // console.log(Object.getOwnPropertyNames(dom.match(re)))
    let urlArray = dom.match(re).map(e => {
        console.log(e.slice(13, -1))
        return e.slice(13, -1)
        // return e.slice(15, -1)
    })
    downImg(urlArray)


}
function getDom(Url){
    request(Url,function(err, res, body){
        if(!err && res ){
    
        // console.log(body)
        findImg(body)
        }else{
            console.log("[error-]", err)
        }
    })
}
