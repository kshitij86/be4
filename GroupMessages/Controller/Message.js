const db = require("../Models");
const { Op } = require("sequelize");

exports.MessageToSingleUser = async (req, res) => {
  let Details = {
    userid: req.body.userid,
    senderid: req.body.senderid,
    message: req.body.message,
    Isgroupmessage: false,
    senton: Date.now(),
  };
  let sender = null;
  let receiver = null;
  await db.user
    .findOne({ where: { userid: { [Op.eq]: Details.userid } } })
    .then((_receiver) => {
      receiver = _receiver;
    });
  await db.user
    .findOne({ where: { userid: { [Op.eq]: Details.senderid } } })
    .then((_sender) => {
      sender = _sender;
    });
  if (sender && receiver) {
    db.message
      .create(Details)
      .then((resp) => {
        res.status(200).send("The Message Has Been Sent");
      })
      .catch((err) => {
        res
          .status(500)
          .send(
            "There Was An Error From Our Side While Sending the message to a Single User",
            err
          );
      });
  } else {
    res.status(404).send("The Sender and Reciever Id is Wrong");
  }
};
exports.GetAllMessage = (req, res) => {
  const userId = req.params.userid;
  const senderId = req.params.senderid;

  db.message
    .findAll({ where: { userid: userId }, senderid: senderId })
    .then((msg) => {
      console.log(msg);
      let formatted_msg = [];
      msg.forEach((msg, idx) => {
        formatted_msg.push({
          userid: msg.userid,
          SenderId: msg.senderid,
          MessageBody: msg.message,
        });
      });
      res.status(200).send({
        MessagesStatus: "Fetched",
        message: formatted_msg,
      });
    })
    .catch((err) => {
      res.status(500).send({
        Message: "Please Enter A Valid UserId and SenderId",
      });
    });
};

exports.getAllUser = (req, res) => {
  const userId = req.body.userId;
  let promise;
  if (userId) {
    promise = db.user.findAll({ where: { userid: { [Op.eq]: userId } } });
  } else promise = db.user.findAll();
  let User = [];
  promise
    .then((users) => {
      res.status(200).send({
        UserId: users,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send("There was an error from our side while finding all the user");
    });
};

exports.GetMessageOfGroup = async (req, res) => {
  const groupId = req.params.groupId;
  await db.groups
    .findOne({ where: { groupid: { [Op.eq]: groupId } } })
    .then((messages) => {
      let Messages = [];
      db.message
        .findAll({
          where: { userid: { [Op.eq]: groupId } },
          Isgroupmessage: { [Op.eq]: true },
        })
        .then((resp) => {
          messages.forEach((messages, idx) => {
            Messages.push({
              GroupId: messages.groupid,
              MessageBody: messages.message,
            });
          });
          res.status(200).send({
            MessageStatus: "Fetched",
            MessageBodyIs: Messages,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("There Was an error from our side ");
        });
    });
};

exports.SentMessageOnGroup = async (req, res) => {
  const Deatils = {
    userid: req.body.userid,
    senderid: req.body.senderid,
    message: req.body.message,
    Isgroupmessage: true,
    senton: Date.now(),
  };
  await db.groups
    .findOne({ where: { groupid: { [Op.eq]: Deatils.userid } } })
    .then((group) => {
      console.log(group);
      if (group) {
        db.message
          .create(Deatils)
          .then((resp) => {
            res.status(200).send("The Message is Sent on Group");
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send(
                "There was an error from oiur side while creating the group"
              );
          });
      } else {
        res.status(404).send("group not found");
      }
    })
    .catch((err) => {
      res.status(400).send("Please enter a valid User id ");
    });
};
exports.getAllUserInGroup = (req, res) => {
  const groupId = req.params.groupId;
  db.groups
    .findOne({ where: { groupid: { [Op.eq]: groupId } } })
    .then((group) => {
      let Users = [];
      group.forEach((group, idx) => {
        Users.push({
          UserAre: group.userid,
        });
      });
      res.status(200).send({
        usersAre: Users,
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send(
          "there was an error from our side while getting all the user in the group"
        );
    });
};
