import asyncHandler from 'express-async-handler'
import Act from '../models/Act2.js'
import QRCode from 'qrcode'

//create

export const createAct = asyncHandler(async (req, res) => {
    // res.render("user-pages/pages/gererdoc");
    // Create certificate
    const newAct = new Act(req.body)
    await newAct.save()
    res.redirect("/succes");

    if (newAct) {
        return res.status(201).json({ status: "ok" })
    } else {
        res.status(400)
        throw new Error('Invalid')
    }

})

//get act
export const getAct = asyncHandler(async (req, res) => {
    try {
        const Acts = await Act.findById(req.params.id);
        res.status(200).json(Acts)
        res.redirect("/Actee/:id")
    } catch (err) {
        res.status(500).json(err)

    }
})

//get all
export const getAllAct = asyncHandler(async (req, res) => {

    try {
        const hotels = await Act.find()
        //  const hotels = await Hotel.find(req.query);
        res.status(200).json(hotels)
    } catch (err) {
        res.status(400)
    }
})

//compter le nombre d'acte
export const getCount = asyncHandler(async (req, res) => {
    try {
        let result = await Act.find();
        // console.log(result); //result
        // console.log(result.length); //count
        res.status(200).json(result.length)
    } catch (err) {
        res.status(400)
    }
})

//delete
export const deleteUser = asyncHandler(async (req, res) => {

    await Act.findByIdAndRemove(req.params.id);
    res.redirect("/admin/");
    
})