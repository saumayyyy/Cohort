const mongoose = require("mongoose");
mongoose.connect("<--url--->");

//create schema(s)
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"//the name we gave while creating model
    }]
});

const adminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

//create model(s)
const User = mongoose.model("User",userSchema);
const Admin = mongoose.model("Admin",adminSchema);
const Course = mongoose.model("Course",courseSchema);

module.exports = {
    User,
    Admin,
    Course
}
