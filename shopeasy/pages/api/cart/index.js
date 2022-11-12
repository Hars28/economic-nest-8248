import dbConnect from "../../../lib/dbConnect"
import cartModals from "../../../modals/cart/cart"


export default async function Home(req, res) {

    const method = req.method
    await dbConnect()
    switch (method) {
        case "GET": {
            const { userId } = req.body
            console.log(userId);
            const finduser = await cartModals.find({ "userId": userId })
            if (!finduser) {
                return res.send({
                    cartitem: [],
                    massage: "sorry havn't anything here "
                })
            }
            res.send(finduser)
        }
        case "POST": {
            const cartitem = req.body
            try {

                const isitemhave = await cartModals.find({ "userId": cartitem.userId })
                if (isitemhave) {
                    let qty = isitemhave[0].quantity + cartitem.quantity
                    const update = await cartModals.updateOne({ "userId": cartitem.userId }, { "quantity": qty })
                    return res.send(isitemhave)
                }


                const cartitemsave = new cartModals({
                    ...cartitem
                })
                await cartitemsave.save()
                // console.log(cartitemsave);
                return res.send({
                    e: cartitemsave
                })
                res.send("sorry")
            }
            catch (e) {
                return res.send({
                    e: e.massage
                })
            }
        }
        case "DELETE": {

            const _id  = req.body
            console.log(_id)

            const deleteitem = await cartModals.deleteOne({ "_id": _id })
          
            res.send(deleteitem)

            return res.send("hii")
        }
        default: {
            return res.end(`access denied to ${method} `)
        }
    }
    // res.send(method)
}