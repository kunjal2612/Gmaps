const express = require("express")
const mongoose = require("mongoose")
//require('mongoose-double')(mongoose);
// var mySchema = new schema({ double: SchemaTypes.Double });
const router = express.Router()
const empMod = mongoose.model("employees")



router.get("/list", (req, res) => {
    empMod.find((err, result) => {
        if (!err) {
            console.log(result);
            res.render("list", { data: result });
        } else {
            return res.send("Error");
        }
    });
})

router.get("/ttee", (req, res) => {
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
})

router.get("/get-details", (req, res) => {
    console.log('qq :', req.query)
    empMod.findOne({ lat: req.query.lat, long: req.query.long }).then(data => {
        if (!data) return res.status(404).jsonp({ message: 'Details not found.' })
        return res.status(200).jsonp({ message: 'Details get successfully.', data })
    }).catch(error => {
        return res.status(500).jsonp({ message: 'Something went wrong.' })
    })
})

module.exports = router;