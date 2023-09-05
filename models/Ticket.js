const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        ticketTitle:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required: true,
        },
        details:{
            type:String,
            required:true,
        },
        user:{
            type:String
        }
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)