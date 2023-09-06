import { useState,useContext } from 'react'
import * as ticketAPI from '../../utilities/tickets-api'
import {AppContext} from '../../contexts/context'

export default function TicketForm() {
    const {currentTicket,user} = useContext(AppContext)
    console.log('editTicket',currentTicket)
    const [editTicketData, setEditTicketData] = useState({
        _id:currentTicket._id,
        name:currentTicket.name,
        ticketTitle:currentTicket.ticketTitle,
        email:currentTicket.email,
        details:currentTicket.details,
        userID:currentTicket.userID,
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
            console.log('TicketData',editedTicket)
            const ticket = await ticketAPI.editTicket(editedTicket)//here
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
                <input type="text" name='name' value={editTicketData.name} onChange={handleChange} />
                {/* defaultValue not showing? */}
                <label>Ticket Title</label>
                <input type="text" name='ticketTitle' value={editTicketData.ticketTitle} onChange={handleChange} />
                <label>Email</label>
                <input type="text" name='email' value={editTicketData.email} onChange={handleChange} />
                {console.log('default email value',currentTicket.email)}
                <label>Details</label>
                <input type="text" name='details' value={editTicketData.details} onChange={handleChange} />
                <button type="submit">Save Changes</button>
            </form>
            <p className="error-message">&nbsp;{editTicketData.error}</p>
        </div>
        </>
    )

}