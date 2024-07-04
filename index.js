const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./Routes/adminRouter");
const userRouter = require("./Routes/userRouter");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

//generic routes
app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(PORT,()=>{
    console.log("Server started on PORT 3000");
});