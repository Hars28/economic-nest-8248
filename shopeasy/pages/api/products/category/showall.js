import dbConnect from "../../../../lib/dbConnect"
import categoryModal from "../../../../modals/products/category"


export default async function Home(req, res) {

    await dbConnect()
    const count = await categoryModal.find().count()
    res.send({
        massage: "total data",
        count : count
    })
} 