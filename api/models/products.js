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
            type: [String], 
            required: true,
          },
        images: {
            type: [String],
            required: true,
          },
        tofeatur1e:{
            type:Boolean,
            default:false,
        },
        weeklyoffer:{
            type:Boolean,
            default:false,
        },
        specialoffer:{
            type:Boolean,
            default:false,
        },
       
      

});

module.exports= mongoose.model("Product",productSchema);