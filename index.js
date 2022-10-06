import express from "express"
import connectDB from './config/db.js'
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import authRoute from "./routes/auth.js"
import usagerRoute from "./routes/usager.js"
import adminRoute from "./routes/admin.js"
import userRoute from "./routes/user.js"
import loginRoute from "./routes/logins.js"
import actRoute from "./routes/act.js"
import { engine } from "express-handlebars"
import path from 'path'
import { fileURLToPath } from 'url';
import QRCode from 'qrcode'
import ejs from 'ejs'
import pdf from 'html-pdf'
import fetch from 'node-fetch';
import Act from './models/Act2.js'
import Usager from './models/Usager.js'
import mustacheExpress from 'mustache-express'


dotenv.config();

const app = express();
connectDB();




app.set("view engine", "ejs",'mustache')
app.engine('html', mustacheExpress());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/static", express.static('./static/'));
app.use("/Acte", actRoute);



app.use("/auth", authRoute)
app.use("/usager", usagerRoute)
app.use("/admin", adminRoute)
app.use("/user", userRoute)
app.use("/logins", loginRoute)

app.get("/", async (req, res) => {
    res.render("home");
});

// app.get("/logins", async (req, res) => {

//     res.render("logins");
// });
app.get("/personel", async (req, res) => {

    res.render("user");
});
app.get("/user/:id", async (req, res) => {
    const usager = await Usager.findById(req.params.id);

    res.render("updateuser",{
        Usager: usager
    });
});

app.get("/succes", async (req, res) => {

    res.render("success");
});
app.get("/adduser", async (req, res) => {

    res.render("admin-pages/pages/adduser");
});
app.get("/adduseragain", async (req, res) => {

    res.render("admin-pages/pages/adduseragain");
});

// app.get("/admins", async (req, res) => {

//     res.render("admin");
// });



// app.get("/now-ui-dashboard-master/example/icons.html", async (req, res) => {

// });

app.get("/Act", async (req, res) => {

    const data = {
        "matricule": "568563452354875428729859868926"
    }
    let code = '';

    if (data) {
        const dataJson = JSON.stringify(data)

        QRCode.toDataURL(dataJson, function (err, string) {
            if (err) throw err
            code = string
        })
    }
    // QRCode.toFile("public/qrcode/qr.png", dataJson, function (err) {
    //     if (err) throw err
    // })


    res.render("Acte", { act: code });
});
app.get("/Actee/:id", async (req, res) => {
    const Acts = await Act.findById(req.params.id);
    // res.status(200).json(Acts)
    const data = {
        Acts
    }
    let code = '';

    if (data) {
        const dataJson = JSON.stringify(data)

        QRCode.toDataURL(dataJson, function (err, string) {
            if (err) throw err
            code = string
            res.render("Act", { qr: code, acts: Acts });
        })
    }
    // QRCode.toFile("public/qrcode/qr.png", dataJson, function (err) {
    //     if (err) throw err
    // })
});
app.delete("/Actee/:id", async (req, res) => {
    await Act.findByIdAndRemove(req.params.id);
    res.redirect("/admin/");
});

app.get("/pdf", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);

    const __dirname = path.dirname(__filename);

    ejs.renderFile(path.join(__dirname, './views/Act.ejs'), function (err, str) {
        if (err) return res.send(err);

        // str now contains your rendered html


        pdf.create(str).toFile("report.pdf", function (err) {
            if (err) return res.send(err);

            res.send("File created successfully");
        });
    });
});






// QRCode.toString(dataJson, function (err, string) {
//     if (err) throw err
//     return string
// })













app.listen(7000, () => {
    console.log("server running on port 7000 ");
})