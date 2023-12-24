const express= require("express");
const Products =require("../models/products")


const getAllProducts=async(req,res)=>{
 
    const {model,price,processer,rom,ram,operatingSystem,select,tofeature,weeklyoffer,specialoffer}=req.query;
    const queryObject={}
    
    if(model){
        queryObject.model=model;
    }
    if(price){
        queryObject.price=price;
    }
    if(processer){
        queryObject.processer={$regex:processer,$options:"i"};
    }
    if(rom){
        queryObject.rom=rom;
    }
    if(ram){
        queryObject.ram=ram;
    }
    if(operatingSystem){
        queryObject.operatingSystem={$regex:operatingSystem,$options:"i"};
    }
    if(tofeature){
        queryObject.tofeature=tofeature;
    }
    if(weeklyoffer){
        queryObject.weeklyoffer=weeklyoffer;
    }
    if(specialoffer){
        queryObject.specialoffer=specialoffer;
    }

    let apiData=Products.find(queryObject);
    
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }
    
    


    const productData=await apiData;
    res.status(200).json({ productData});
};




const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({ mgs:"I am getAllProductsTesting"});
};
module.exports={
    getAllProducts,getAllProductsTesting
  } 
