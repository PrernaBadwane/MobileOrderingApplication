const mongoose = require ("mongoose");
const { options } = require("../routes/products");

uri= "mongodb+srv://prernabadwane:DcHAHhHTTj3TSMcl@mobileapi.0d9gq2e.mongodb.net/MobileWebApp?retryWrites=true&w=majority"

const connectDB=(uri)=>{
    console.log("connnected");
    console.log(uri);
    return mongoose.connect(uri,{
        useNewUrlParser: "true",
  useUnifiedTopology: "true"
    });
};

module.exports=connectDB;