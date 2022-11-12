// userid
// productid
// quantity 

// get post delete

const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        userId : { type : mongoose.Types.ObjectId, require : true},
        productid : { type : mongoose.Types.ObjectId , require : true},
        quantity : { type : Number ,  require : true,  default : 0 }
    },
    {
        versionKey : false
    }
)



const cartModals = mongoose.models.cart ||mongoose.model("cart", cartSchema)
                

module.exports = cartModals
