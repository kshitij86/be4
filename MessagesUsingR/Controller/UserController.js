const db=require("../Models")
const User=db.user;
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const config=require("../Config/Secret")

exports.Signup=(req,res)=>{
    const Details={
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password,10)
    }
    User.create(Details).then(resp=>{
        res.status(200).send("User Is Created Successfully")
    }).catch(err=>{
        res.status(500).send("There Was An Error From Our Side While Creating The User",err)
    })
}
exports.Sigin=(req,res)=>{
    User.findOne({where:{username:req.body.username}}).then(user=>{
        isvalidpass=bcrypt.compareSync(req.body.password,user.password)
        if(!isvalidpass){
            return res.status(400).send("Wrong Password Please Try Again")
        }
        let token=jwt.sign({id:user.id},config.Secret,{expiresIn:86400})
        res.status(200).send({
            id:user.id,
            username:user.username,
            token:token
        })
    }).catch(err=>{
        res.status(400).send("No Such User Found")
    })
}