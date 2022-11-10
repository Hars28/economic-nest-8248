import dbConnect from '../../../../lib/dbConnect'
import mensModal from '../../../../modals/products/mensModals'

const mongoose = require('mongoose')

export default async function allmens(req, res) {

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
        let mensbyid = await mensModal.findById(_id);
        res.status(200).send(mensbyid);
    } catch (e) {
        console.log(e)
        return res.end(e.massage)
    }
}