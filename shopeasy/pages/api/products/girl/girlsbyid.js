import dbConnect from '../../../../lib/dbConnect'
import girlModal from '../../../../modals/products/girlModal'

const mongoose = require('mongoose')

export default async function allgirls(req, res) {

    if (req.method !== "GET") {
        return res.status(404).send({
            massage: `Trying ${req.method} is not valid !`
        })
    }
    const { _id } = req.query

    await dbConnect()
    try {
        if (!_id) {
            return res.status(404).send({
                message: `id is missing in params`,
            });
        }
        let girlbyid = await girlModal.findById(_id);
        res.status(200).send(girlbyid);
    } catch (e) {
        console.log(e)
        return res.end(e.massage)
    }
}