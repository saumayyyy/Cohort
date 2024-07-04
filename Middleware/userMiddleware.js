const {User} = require("../Database/database");

async function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    const resp = await User.findOne({
        username:username,
        password:password
    });

    if(resp){
        next();
    }
    else{
        res.status(403).json({
            msg:"Invalid Access,Only User Access Only"
        })
    }
}

module.exports = userMiddleware;