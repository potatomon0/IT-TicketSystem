const Ticket = require('../../models/Ticket')

const create = async(req,res)=>{
    try{
        const ticket = await Ticket.create(req.body)
        // await Ticket.create(req.body)
        res.json(ticket)
        // .then(res.redirect('/'))
    }catch(err){
        res.status(400).json(err)
    }
    
}

const getUserTickets = async(req,res)=>{
    try{
        const tickets = await Ticket.find({userID:req.user._id})
        res.status(200).json(tickets)
        // res.redirect(200,'/user/tickethistory').json(tickets)
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
const deleteTicket=async(req,res)=>{
    try{
        await Ticket.findByIdAndDelete(req.params.id)
    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}

const editTicket=async(req,res)=>{
    try{
        const ticket = await Ticket.findById(req.params.id)
        res.json(ticket)
    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}

const updateTicket = async(req,res)=>{
    try{
        
    }catch(err){

    }
}

module.exports = {create,getUserTickets,deleteTicket,editTicket}