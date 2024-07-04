const {Admin} = require("../Database/database");

async function adminMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    const resp = await Admin.findOne({
        username:username,
        password:password
    });

    if(resp){
        next();
    }
    else{
        res.status(403).json({
            msg:"Invalid Access,Only admin can access"
        })
    }
}

module.exports = adminMiddleware;  