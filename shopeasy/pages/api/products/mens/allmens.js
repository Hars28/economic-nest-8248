import dbConnect from '../../../../lib/dbConnect'
import mensModal from '../../../../modals/products/mensModals'

const mongoose = require('mongoose')

export default async function allmens(req, res) {

    if(req.method !=="GET"){
        return res.status(404).send({
            massage : `Trying ${req.method} is not valid !`
        })
    }

    await dbConnect()
    try{
        const mensdata = await mensModal.find()
        console.log(mensdata)
        return res.status(200).send(mensdata)
    }catch(e){
        console.log(e)
     return   res.end(e.massage)
    }
}