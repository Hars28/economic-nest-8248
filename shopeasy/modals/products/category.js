const { string } = require('i/lib/util')
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: String,
        image: String,
        brand: String,
        discount_price: String,
        price: String,
        type : String,
        _id: mongoose.Schema.Types.ObjectId
    }
    , {
        versionKey: false
    }
)


const categoryModal = mongoose.models.category || mongoose.model('category', schema)

module.exports = categoryModal