const {Router} = require("express");
const adminMiddleware = require("../Middleware/adminMiddleware");
const {Admin} = require("../Database/database");
const {Course} = require("../Database/database");

const router = Router();

//make all GET,POST,PUT,DLT requests here on router
router.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    //check if user already exists.If yes then respond user exists
    //else create entry in DB for user
    const resp = await Admin.findOne({
        username:username,
        password:password
    });
    if(resp){
        res.status(500).json({
            msg:"Admin Already Exists"
        })
    }
    await Admin.create({
        username:username,
        password:password
    })

    res.status(200).json({
        msg:"Admin created Successfully"
    })
})

router.post("/courses",adminMiddleware,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //use zod to validate the input

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.status(200).json({
        msg:"Course created Successfully",
        courseId : newCourse._id
    })
});

router.get("/courses",adminMiddleware,async (req,res)=>{
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

module.exports = router;