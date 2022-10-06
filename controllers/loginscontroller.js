import asyncHandler from 'express-async-handler';
import Usager from '../models/Usager.js'
import Act2 from '../models/Act2.js';


export const getLoginsHomePage = asyncHandler(async (req, res) => {
    try {
        let resultAdmin = await Usager.find({ isAdmin: "true" });
        let resultpersonnel = await Usager.find({ personnel: "true" });
        let resultuser = await Usager.find({ user: "true" });
        let resultAct = await Act2.find();
        res.render("login-pages/pages/dashboard");
        // console.log(result); //result
        // console.log(result.length); //count
        res.status(200).json(result.length)
    } catch (err) {
        res.status(400)
    }
});
export const getGererDoc = asyncHandler(async (req, res) => {

    res.render("login-pages/pages/gererdoc");
});
export const getGererPer = asyncHandler(async (req, res) => {
    Usager.find({}, function (err, usager) {
        res.render("login-pages/pages/gererper", {
            usagerper: usager
        });
    });

});

export const getGererUsager = asyncHandler(async (req, res) => {
    Usager.find({}, function (err, usager) {
        res.render("login-pages/pages/gererusager", {
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
export const getCount = asyncHandler(async (req, res) => {
    try {
        let result = await Client.find();
        // console.log(result); //result
        // console.log(result.length); //count
        res.status(200).json(result.length)
    } catch (err) {
        res.status(400)
    }
});