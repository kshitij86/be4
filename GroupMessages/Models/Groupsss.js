const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
    const ChatGroup=sequelize.define("ChatGroup",{
        userid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        groupid:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    })
    return ChatGroup
}