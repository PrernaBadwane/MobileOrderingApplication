require("dotenv").config();
const express=require("express");
const mobile=express();
const connectDB=require("./db/connect")

mobile.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const url="mongodb+srv://prernabadwane:DcHAHhHTTj3TSMcl@mobileapi.0d9gq2e.mongodb.net/MobileWebApp?retryWrites=true&w=majority"
const PORT =process.env.PORT || 5000;

const products_routrs= require("./routes/products")

mobile.get("/",(req,res)=>{
    res.send("hii ,I am live");
});

// connecting

mobile.use("/api/products",products_routrs)

const start =async()=>{
    try {
        await connectDB(url);
        mobile.listen(PORT,()=>{
            console.log(`${PORT} ,I am connected`);
        })
        
    } catch (error) {
        console.log(error);
    }
}
start();