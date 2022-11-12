
// sort by brand done 
// sort by price done
// sort by gender 
// sort by discount 
// sort by rating 
// 

import dbConnect from "../../../../lib/dbConnect"
import categoryModal from "../../../../modals/products/category"

export default async function filter(req, res) {

    if (req.method !== "GET") {
        return res.send(`this ${req.method} not valid through this route`)
    }
    const { id } = req.headers

    if (!id) {
        return res.send("authorizaiton failed")
    }

    try {

        const params = req.query

        await dbConnect()

        // name: String,
        // image: String,
        // brand: String,
        // discount_price: String,
        // price: String,
        // type : String,

        // sorting based on rating 
        if (params.ratings) {
            const obj = { ...params, ratings: undefined }
            console.log(params)

            if (params.cmd === "lte") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "ratings": { $lte: +params.ratings } } }
                ])
                return res.send(filtered)
            }
            else if (params.cmd === "lt") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "ratings": { $lt: +params.ratings } } }
                ])
                return res.send(filtered)
            }
            else if (params.cmd === "gte") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "ratings": { $glt: +params.ratings } } }
                ])
                return res.send(filtered)
            }
            else if ((params.cmd === "gt")) {
                const filtered = await categoryModal.aggregate([
                    { $match: { "ratings": { $gt: +params.ratings } } }
                ])
                return res.send(filtered)
            }

            return res.send(obj)

        }
        // sort based on price 
        else if (params.price) {
            const price = `Rs. ${params.price}`
            console.log(price)
            const filtered = await categoryModal.aggregate([
                { $match: { "price": { $lte: price } } }
            ])
            return res.send(filtered)
        }
        else if (params.discount_price) {
            const discount = `Rs. ${params.discount_price}`
            console.log(discount)
            const filtered = await categoryModal.aggregate([
                { $match: { "discount_price": { $lte: discount } } }
            ])
            return res.send(filtered)
        }


        const filtered = await categoryModal.aggregate([{ $match: params }, {
            $sort: { totalOrderValue: -1 }
        }])
        console.log(filtered)

        res.send({
            para: params,
            data: filtered
        })

    }
    catch (e) {
        return res.send({
            massage: e.massage
        })
    }




}


// http://localhost:3000/api/products/category?brand=Roadster&ratings=3&cmd=lte
// http://localhost:3000/api/products/category?discount_price=892