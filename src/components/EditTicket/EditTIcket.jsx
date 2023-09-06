import { useState } from 'react'
import * as ticketAPI from '../../utilities/tickets-api'

export default function TicketForm({ticketData}) {
    console.log('editTicket',ticketData)
    const [editTicketData, setEditTicketData] = useState({
        name:'',
        ticketTitle:'',
        email:'',
        details:'',
        error:''
    })
    const handleChange=(e)=>{
        setEditTicketData({
            ...editTicketData,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = async(e)=>{
        // console.log('handleSubmit')
        e.preventDefault()
        try{
            const editedTicket = {...editTicketData}
            delete editedTicket.error
            const ticket = await ticketAPI.editTicket('PUT',editedTicket)//here
            setEditTicketData(ticket)
        }catch(err){
            setEditTicketData({...editTicketData, error:'Failed to edit ticket. Please try again.'})
        }
    }
    return(
        <>
        <div className="editTicketForm">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name='name' value={editTicketData.name} onChange={handleChange} defaultValue={ticketData.name}/>
                <label>Ticket Title</label>
                <input type="text" name='ticketTitle' value={editTicketData.ticketTitle} onChange={handleChange} defaultValue={ticketData.ticketTitle}/>
                <label>Email</label>
                <input type="text" name='email' value={editTicketData.email} onChange={handleChange} defaultValue={ticketData.email} />
                <label>Details</label>
                <input type="text" name='details' value={editTicketData.details} onChange={handleChange} defaultValue={ticketData.details}/>
                <button type="submit">Save Changes</button>
            </form>
            <p className="error-message">&nbsp;{editTicketData.error}</p>
        </div>
        </>
    )

}