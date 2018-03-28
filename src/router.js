const {
    homeHandler,
    staticFileHandler
} = require("./handler.js")

const router = (request, response)=>{
    const endpoint= request.url;
    if(endpoint === "/"){
        homeHandler(request, response)
    } else if(endpoint.indexOf("/public") !== -1){
        staticFileHandler(request, response, endpoint)
    }
}

module.exports = router