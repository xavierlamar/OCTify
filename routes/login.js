import router from "./auth";


router.get("/logins", async (req, res) => {

    res.render("logins");
});