import dbConnect from '../../../../lib/dbConnect'
import girlModal from '../../../../modals/products/girlModal'

export default async function allmens(req, res) {

    if(req.method !=="GET"){
        return res.status(404).send({
            massage : `Trying ${req.method} is not valid !`
        })
    }

    await dbConnect()
    try{
        const girldata = await girlModal.find()
        
        return res.status(200).send(girldata)
    }catch(e){
        console.log(e)
     return   res.end(e.massage)
    }
}



