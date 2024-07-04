const {Router} = require("express");
const userMiddleware = require("../Middleware/userMiddleware");
const {User,Course} = require("../Database/database");

const router = Router();

router.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    //check if user already exists.If yes then respond user exists
    //else create entry in DB for user
    const resp = await User.findOne({
        username:username,
        password:password
    });
    if(resp){
        res.status(500).json({
            msg:"User Already Exists"
        })
    }
    await User.create({
        username:username,
        password:password
    })

    res.status(200).json({
        msg:"User created Successfully"
    })
})

router.get("/courses",async (req,res)=>{
    const allCourse = await Course.find({});

    if(allCourse){
        res.status(200).json({
            msg:"Fetched all courses",
            courses : allCourse
        })
    }else{
        res.json({
            msg:"Courses couldnt be fetched"
        })
    }
});

router.post("/courses/:courseId",userMiddleware,async (req,res)=>{
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne(
        {username:username},
        {"$push" : {
            purchasedCourses: courseId
        }});
    res.status(200).json({
        msg:"User Enrolled Successfully"
    })
});

router.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const user = await User.findOne({
        username:req.headers.username
    });

    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        msg:"dnvdsnvj"
    })
})

module.exports = router;