const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    
        modelCode: {
            type:String,
            required:true,
        },
        brand: {
            type:String,
            required:true,
        },
        model: {
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        currency: {
            type:String,
            required:true,
        },
        availability: {
            type:String,
            required:true,
        },
        offers: [
          {
            type: {
                type:String,
               
            },
            value: {
                type:Number,
                
            },
            description: {
                type:String,
                
            }
          }
        ],
        specifications: {
          display: {
            size: {
                type:String,
                required:true,
            },
            resolution: {
                type:String,
                required:true,
            },
            type: {
                type:String,
                required:true,
            }
          },
        processor: {
            type:String,
            required:true,
        },
          camera: {
            rear: {
              type: {
                type:String,
                required:true,
            },
              main: {
                type:String,
                required:true,
            },
              ultraWide: {
                type:String,
                
            },
              telephoto:{
                type:String,
                
            },
              depth: {
                type:String,
                
            }
            },
            front: {
                type:String,
                required:true,
            }
          },
          battery: {
            type:String,
            required:true,
        },
          storage: {
            ram: {
                type:String,
                required:true,
            },
            rom: {
                type:String,
                required:true,
            }
          },
          operatingSystem:  {
            type:String,
            required:true,
        }
        },
        features: {
          f1:{
            type:String,
          required:true,
          },
          f2:{type:String,
            required:true,},
            f3:{
              type:String,
            required:true,
            },
            f4:{type:String,
              required:true,},
          },
        images: {
            full:{
              type:String,
            required:true,
            },
            mid:{type:String,
              required:true,},
          },
          tofeature:{
            type:Number,
            default:0,
        },
        weeklyoffer:{
          type:Number,
          default:0,
        },
        specialoffer:{
          type:Number,
          default:0,
        },
       
      

});

module.exports= mongoose.model("Product",productSchema);