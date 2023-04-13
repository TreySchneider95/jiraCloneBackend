const Ticket = require("../models/Tickets")


async function getAllTickets(req, res, next) {
    const tickets = await Ticket.find({})

    res.json({
      sucess:true,
      tickets: tickets
    });

    
}


async function getSingleTicket(req, res, next){
    const ticket = await Ticket.findOne({_id: req.params.ticketIdToGet})
    res.json({
        sucsess: true,
        ticket: ticket
    })
}

async function deleteTicket(req, res, next){
    const ticketToDelete = await Ticket.deleteOne({title: req.params.ticketTitleToDelete})
    res.json({
        sucess: true,
        ticket: ticketToDelete
    })
}

async function postTicket(req, res, next){
    const title = req.body.title
    const description = req.body.description
    const assignedToUserId = req.body.assignedToUserId
    const status = req.body.status
    const createdById = req.body.createdById
    const newticket = new Ticket({
        title,
        description,
        assignedToUserId,
        status,
        createdById
    })
    console.log(newticket)
    const saveData = await newticket.save()

    res.json({
        sucess: true,
        tickets: saveData
    })
}

async function putTicket(req, res, next){
    const update = req.body
    const ticketUpdate = await Ticket.updateOne({title: req.params.title}, update)

    res.json({
        sucess: true,
        ticket: ticketUpdate
    })
}

module.exports = {
    getAllTickets,
    getSingleTicket,
    deleteTicket,
    postTicket,
    putTicket
}