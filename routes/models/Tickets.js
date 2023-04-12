const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")
const Schema = mongoose.Schema;

const TicketSchema = new mongoose.Schema({
    title: String,
    description: String,
    assignedToUserId: {type: Schema.Types.ObjectId, ref: 'User'},
    status: String,
    createdAt: {type: Date, default: Date.now},
    createdById: {type: Schema.Types.ObjectId, ref: 'User'},
    lastModified: {type: Date, default: Date.now},
    lastUpdatedById: {type: Schema.Types.ObjectId, ref: 'User'},
    id: {type: String, default: ()=>uuidv4()},
})

const Ticket = mongoose.model("tickets", TicketSchema)

module.exports = Ticket