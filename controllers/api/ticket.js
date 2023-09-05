const Ticket = require('../../models/Ticket')

const create = async(req,res)=>{
    try{
        const ticket = await Ticket.create(req.body)
        console.log(ticket)
        res.json(ticket)
    }catch(err){
        res.status(400).json(err)
    }
}
const index = async(req,res)=>{
    console.log('index')
    try{
        const tickets = await Ticket.find({}).exec()//how to pass user state into backend?
        // tickets.sort((a,b)=> a.ticketTitle.sortOrder - b.ticketTitle.sortOrder)
        res.status(200).json(tickets);
    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}

// async function show(req, res) {
//     try {
//         //findById the user's id
//         const ticket = await Ticket.findById(req.params.id);
//         res.status(200).json(ticket);
//     } catch (err) {
//         res.status(400).json({ msg: err.message });
//     }
// }

module.exports = {create, index}