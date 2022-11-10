const { string } = require('i/lib/util')
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: String,
        image: String,
        brand: String,
        discount_price: String,
        price: String,
        _id: mongoose.Schema.Types.ObjectId
    }
    , {
        versionKey: false
    }
)


const girlModals = mongoose.models.girl || mongoose.model('girl', schema)

module.exports = girlModals