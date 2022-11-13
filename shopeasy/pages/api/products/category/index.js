
// sort by brand done 
// sort by price done
// sort by gender 
// sort by discount 
// sort by rating 
// 

import dbConnect from "../../../../lib/dbConnect"
import authModal from "../../../../modals/auth/authmodal"
import categoryModal from "../../../../modals/products/category"

export default async function filter(req, res) {

    if (req.method == "DELETE") {
        await dbConnect()
        // authorization 
        const { id } = req.headers
        const authorization = await authModal.find({ "_id": id })
        console.log("authorization", authorization)
        if (authorization[0]?.role === "admin") {
            const { id } = req.query
            console.log(id);
            const deleteitem = await categoryModal.deleteOne({ "_id": id })
            return res.send({
                deleteitem: deleteitem,
                massage: "category me delete acchi btt nhi hai "
            })
        } else {
            return res.send("invalid role")
        }
    }
    if (req.method === "POST") {
        // "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17425548/2022/3/7/0adbc936-ec99-4157-ab34-9a7226e0738f1646660549902RoadsterMenBlackSneakers1.jpg",
        // "brand": "Roadster",
        // "name": "Men Sneakers",
        // "discount_price": "Rs. 872",
        // "price": "Rs. 3795",
        // "id": 17,
        // "type": "shoes",
        // "ratings": 3.5
        await dbConnect()

        const { id } = req.headers
        const authorization = await authModal.find({ "_id": id })
        // console.log("authorization", authorization)
        if (authorization[0]?.role === "admin") {
            const items = req.body
            // console.log(items)
            const additem = new categoryModal({
                ...items
            }, { $position: 0 })
            await additem.save()
            // console.log("hii")
            return res.send({
                massage: "saved",
            })
        } else {
            return res.send("invalid role")
        }





    }
    if (req.method === "PUT") {
        await dbConnect()
        // authorization 
        const { id } = req.headers
        const authorization = await authModal.find({ "_id": id })
        console.log("authorization", authorization)
        if (authorization[0]?.role === "admin") {
            const { id } = req.query

            const data = req.body
            console.log(data)
            const updateeditem = await categoryModal.updateOne({ "_id": id }, data)
            console.log(updateeditem)
            return res.send({
                // deleteitem: deleteitem,
                massage: "category me update acchi btt nhi hai "
            })
        } else {
            return res.send("invalid role")
        }
        // todo
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
            const price = +params.price
            console.log(price)

            if (params.cmd === "lte") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "price": { $lte: price } } }, { $sort: { price: 1 } }, { $limit: 20 }
                ])
                return res.send(filtered)
            }
            else if (params.cmd === "lt") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "price": { $lt: price } } }, { $sort: { price: 1 } }, { $limit: 20 }
                ])
                return res.send(filtered)
            }
            else if (params.cmd === "gte") {
                const filtered = await categoryModal.aggregate([
                    { $match: { "price": { $gte: price } } }, { $sort: { price: 1 } }, { $limit: 20 }
                ])
                return res.send(filtered)
            }
            else if ((params.cmd === "gt")) {
                const filtered = await categoryModal.aggregate([
                    { $match: { "price": { $gt: price } } }, { $sort: { price: 1 } }, { $limit: 20 }
                ])
                return res.send(filtered)
            }








            const filtered = await categoryModal.aggregate([
                { $match: { "price": { $lte: price } } }, { $sort: { price: -1 } }, { $limit: 20 }
            ])
            console.log(filtered);
            return res.send(filtered)
        }
        else if (params.discount_price) {
            const discount = params.discount_price
            // console.log(discount)
            const filtered = await categoryModal.aggregate([
                { $match: { "discount_price": { $lte: discount } } }, { $sort: { price: -1 } }, { $limit: 20 }
            ])
            return res.send(filtered)
        }
        else if (params.findbyid) {

            const product = await categoryModal.findById(params.findbyid)
            return res.send({
                massage: "your item",
                data: product
            })

        }


        const filtered = await categoryModal.aggregate([{ $match: params }, { $limit: 20 }])
        console.log(filtered)

        res.send({
            para: params,
            data: filtered,
            // "hii": "jii"
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
// http://localhost:3000/api/products/category?price=892

// {
//     "_id": "6370a0a90fcf1d6f21a785f1",
//     "name": "123",
//     "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17425548/2022/3/7/0adbc936-ec99-4157-ab34-9a7226e0738f1646660549902RoadsterMenBlackSneakers1.jpg",
//     "brand": "12344",
//     "discount_price": 124443,
//     "price": 3795,
//     "type": "shoes"
// }