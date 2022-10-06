import Usager from '../models/Usager.js'
import asyncHandler from 'express-async-handler';



//update
export const updateUser = asyncHandler(async (req, res) => {
    try {
        const updateUser = await Usager.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser)
        res.redirect("/admin/");
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete
export const deleteUser = asyncHandler(async (req, res) => {

        await Usager.findByIdAndRemove(req.params.id);
        res.redirect("/admin/");
        
})

//get user
export const getUser = asyncHandler(async (req, res) => {
    try {
        const user = await Usager.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)

    }
})


//get all users
export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const Users = await Usager.find(req.params.id);
        res.status(200).json(Users)
    } catch (err) {
        res.status(400)
    }
})

//add user
export const AddUser = asyncHandler(async (req, res) => {
    try {
        const Users = await Usager.find(req.params.id);
        res.status(200).json(Users)
    } catch (err) {
        res.status(400)
    }
})
