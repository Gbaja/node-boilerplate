const fs = require("fs");
const path = require("path");

const homeHandler = (request, response) =>{
    let filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, 'utf8', (error, file)=>{
        if(error){
            response.writeHead(500, {"Content-Type":"text/plain"})
            response.end("Server error!")
        }
        else{
            response.writeHead(200, {"Content-type":"text/html"})
            response.end(file)
        }
    })
}

const staticFileHandler = (request, response, endpoint)=>{
    const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        ico: "image/x-icon",
        jpg: "image/jpg",
        png: "image/png"
    }
    const extension = endpoint.split(".")[1];
    const filePath = path.join(__dirname, "..", endpoint);
    fs.readFile(filePath, (error, file)=>{
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" })
            response.end("Server error!")
        }
        else {
            response.writeHead(200, 'Content-Type: ' + extensionType[extension])
            response.end(file)
        }
    })
}

module.exports = {
    homeHandler,
    staticFileHandler
}