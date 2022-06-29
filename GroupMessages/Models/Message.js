const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
    const Message=sequelize.define("Message",{
        userid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        senderid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        message:{
            type:Sequelize.STRING,
            allowNull:false
        },
        senton:{
            type:Sequelize.DATE,
            allowNull:false
        },
        Isgroupmessage:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        }
    })
    return Message
}