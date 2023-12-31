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

const deleteTicket=async(req,res)=>{
    try{
        await Ticket.findByIdAndRemove(req.params.id)
        res.send('ticket deleted')
    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}

const updateTicket = async(req,res)=>{
    try{
        const editTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body)
        res.json(editTicket)

    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}

module.exports = {create,getUserTickets,deleteTicket,updateTicket}