const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;
var SchemaType = mongoose.Schema.Types;
// var mySchema = new Schema({ double: SchemaTypes.Double });
let model = new Schema({
    name: {type: String, required: true, max: 100},
    lat: {type: String, required: true},
    long: {type: String, required: true},
    empTarget: {type: SchemaType.Double, required: true},
    empTarAch: {type: SchemaType.Double, required: true},
    contactNo: {type: String, required: true, max:10},
    salesRatio: {type: SchemaType.Double, required: true }

});


module.exports = mongoose.model('Employee', model);