const controller=require("../Controller/Group")

module.exports=function(app){
    app.post("/whats/api/v1/create/group",controller.CreateGroup)
    app.get("/whats/api/v1/create/:GroupId",controller.findAllinGroup)
}