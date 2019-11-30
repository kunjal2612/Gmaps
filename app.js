const mongoose = require("mongoose")
const empMod = mongoose.model("employees")

mongoose.connect("mongodb://localhost:27017/Gmaps", { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("Success");
    } else {
        console.log("Error");
    }
})
mongoose.set('debug', true)
const emp = require("./models/product-model")
const express = require("express")
const application = express();

const path = require("path")
const expressHandlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const empCont = require("./controllers/product-controller")


application.use(bodyparser.urlencoded({
    extended: true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname: "hbs",
    helpers: require('./config/handlebars-helpers'),
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.get("/", (req, res) => {
    res.render("index", {})
});

application.get("/list-employees", (req, res) => {
    empMod.aggregate([
        {
            $project: {
                _id: 0,
                lat: 1,
                long: 1
            }
        }
    ]).then(data => {
        res.render("list", { locations: data })
    }).catch(err => {
        console.log(err)
    })
});

application.use("/Controllers", empCont)

application.listen("1111", () => {
    console.log("Server Started")
});