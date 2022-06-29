const controller = require("../Controller/Message");
module.exports = function (app) {
  app.post("/Whats/api/v1/Singleuser", controller.MessageToSingleUser);
  app.get(
    "/Whats/api/v1/Singleuser/messages/:userid/:senderid",
    controller.GetAllMessage
  );
  app.get("/Whats/api/v1/Singleuser/users", controller.getAllUser);
  app.post("/Whats/api/v1/GroupMessage/Sending", controller.SentMessageOnGroup);
  app.get(
    "/Whats/api/v1/Singleuser/messages/:groupId",
    controller.GetMessageOfGroup
  );
  app.get("/Whats/api/v1/messages/:groupId", controller.getAllUserInGroup);
};
