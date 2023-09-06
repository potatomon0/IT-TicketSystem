import { useState } from 'react'
import * as ticketAPI from '../../utilities/tickets-api'

export default function TicketForm({user}) {
    const [ticketData, setTicketData] = useState({
        name:'',
        ticketTitle:'',
        email:'',
        details:'',
        error:''
    })
    const handleChange=(e)=>{
        setTicketData({
            ...ticketData,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = async(e)=>{
        // console.log('handleSubmit')
        e.preventDefault()
        try{
            const newTicket = {...ticketData}
            newTicket.userID = user._id
            delete newTicket.error
            const ticket = await ticketAPI.createTicket(newTicket)//here
            setTicketData(ticket)
        }catch(err){
            setTicketData({...ticketData, error:'Failed to create new ticket. Please try again.'})
        }
    }
    return(
        <>
        <div className="ticketForm">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name='name' value={ticketData.name} onChange={handleChange} required/>
                <label>Ticket Title</label>
                <input type="text" name='ticketTitle' value={ticketData.ticketTitle} onChange={handleChange} required/>
                <label>Email</label>
                <input type="text" name='email' value={ticketData.email} onChange={handleChange} required/>
                <label>Details</label>
                <input type="text" name='details' value={ticketData.details} onChange={handleChange} required/>
                <button type="submit">Submit Ticket</button>
            </form>
            <p className="error-message">&nbsp;{ticketData.error}</p>
        </div>
        </>
    )
}