import asyncHandler from 'express-async-handler';
import Usager from '../models/Usager.js'

export const getUserHomePage = asyncHandler(async (req, res) => {
    try {
        let resultuser = await Usager.find();
        res.render("user-pages/pages/dashboard", {
            countuser: resultuser.length
        });
        // console.log(result); //result
        // console.log(result.length); //count
        res.status(200).json(result.length)
    } catch (err) {
        res.status(400)
    }
});

export const getGererDoc = asyncHandler(async (req, res) => {

    res.render("user-pages/pages/gererdoc");
});
export const getGererPer = asyncHandler(async (req, res) => {
    Usager.find({}, function (err, usager) {
        res.render("user-pages/pages/gererper", {
            usagerper: usager
        });
    });

});

export const getGererUsager = asyncHandler(async (req, res) => {
    Usager.find({}, function (err, usager) {
        res.render("user-pages/pages/gererusager", {
            usagerusager: usager
        });
    });
});
export const getGererDeconnect = asyncHandler(async (req, res) => {

    res.render("home");
});
export const getNewUsager = asyncHandler(async (req, res) => {

    res.render("page/New_staf");
});

//compter les admin
export const getCount = asyncHandler(async (req, res) => {
    try {
        let result = await Usager.find();
        // console.log(result); //result
        // console.log(result.length); //count
        res.status(200).json(result.length)
    } catch (err) {
        res.status(400)
    }
});