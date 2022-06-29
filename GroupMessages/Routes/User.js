const controller=require("../Controller/Usercontroller")
module.exports=function(app){
    app.post("/Whats/api/v1/Signup",controller.Signup)
    app.post("/Whats/api/v1/Signin",controller.Sigin)
}