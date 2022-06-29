const db = require("../Models");
const { Op } = require("sequelize");
const req = require("express/lib/request");

exports.CreateGroup = async (req, res) => {
  const Details = {
    userid: req.body.userid,
    groupid: req.body.groupid,
  };
  await db.user
    .findOne({ where: { userid: { [Op.eq]: Details.userid } } })
    .then((user) => {
      if (user) {
        db.groups
          .create(Details)
          .then((resp) => {
            res.status(200).send("The group is created Successfully");
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("there was an error while creating the group");
          });
      }
    })
    .catch((err) => {
      res.status(400).send("There was No such User present ");
    });
};
exports.findAllinGroup = async (req, res) => {
  const GroupId = req.params.GroupId;
  await db.groups
    .findAll({ where: { groupid: { [Op.eq]: GroupId } } })
    .then((group) => {
      res.status(200).json({
        GroupId: group[0].groupid,
        UserId: group[0].userid,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("There was An Error from our side");
    });
};
