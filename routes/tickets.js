const express = require('express');
const router = express.Router();
const ticketController = require("./controllers/ticketController")

// //instantiate mongodb 
// const { db } = require('../mongo');

// /* GET users listing. */
router.get('/all', ticketController.getAllTickets); 

router.get('/single/:ticketIdToGet', ticketController.getSingleTicket)

router.delete('/single/:ticketTitleToDelete', ticketController.deleteTicket)

router.post('/create-one', ticketController.postTicket)

router.put('/update-one/:id', ticketController.putTicket)

module.exports = router;
