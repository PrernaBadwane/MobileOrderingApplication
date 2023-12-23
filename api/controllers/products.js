const express= require("express");
const Products =require("../models/products")


const getAllProducts=async(req,res)=>{
 const productData=await Products.find(req.query);
 res.status(200).json({ productData});
};
const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({ mgs:"I am getAllProductsTesting"});
};
module.exports={
    getAllProducts,getAllProductsTesting
  } 
