const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let model = new Schema({
    name: {type: String, required: true, max: 100},
    lat: {type: String, required: true},
    long: {type: String, required: true},
    empTarget: {type: Number, required: true},
    empTarAch: {type: Number, required: true},
    contactNo: {type: Number, required: true, max:10},
    salesRatio: {type: Number, required: true }
});


module.exports = mongoose.model('Employee', model);