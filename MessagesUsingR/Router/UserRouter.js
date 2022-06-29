const controller=require("../Controller/UserController")
module.exports=function(app){
    app.post("/Whats/api/v1/Signup/id",controller.Signup)
    app.post("/Whats/api/v1/Signin",controller.Sigin)
}