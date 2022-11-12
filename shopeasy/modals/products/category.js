const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: String,
        image: String,
        brand: String,
        discount_price: Number,
        price: Number,
        type: String,
        // _id: {
        //     type: mongoose.Schema.Types.ObjectId, require : false
        // }
    }
    , {
        versionKey: false
    }
)


const categoryModal = mongoose.models.category || mongoose.model('category', schema)

module.exports = categoryModal