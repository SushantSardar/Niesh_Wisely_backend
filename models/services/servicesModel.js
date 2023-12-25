const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daysSchema = {
    day7:  { type: Number }, 
    day30: { type: Number },
    day90: { type: Number },
    day180: { type: Number },
    day365:{ type: Number },
}

const ServiceSchema = new Schema({
    serviceName : {type:String},
    description : {type:String},
    accuracy : {type:Number},
    caps : {
        smallCap : daysSchema,
        midCap : daysSchema,
        largeCap : daysSchema,
        allinOneCap : daysSchema,
    }
})

module.exports = mongoose.model('Services', ServiceSchema);