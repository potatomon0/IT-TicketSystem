import { useState,useContext } from 'react'
import * as ticketAPI from '../../utilities/tickets-api'
import {AppContext} from '../../contexts/context'

export default function TicketForm() {
    const {currentTicket} = useContext(AppContext)
    console.log('editTicket',currentTicket)
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
        console.log('editTicketData',editTicketData)
    }
    return(
        <>
        <div className="editTicketForm">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name='name' value={editTicketData.name} onChange={handleChange} defaultValue={currentTicket.name}/>
                {/* defaultValue not showing? */}
                <label>Ticket Title</label>
                <input type="text" name='ticketTitle' value={editTicketData.ticketTitle} onChange={handleChange} defaultValue={currentTicket.ticketTitle}/>
                <label>Email</label>
                <input type="text" name='email' value={editTicketData.email} onChange={handleChange} defaultValue={currentTicket.email} />
                <label>Details</label>
                <input type="text" name='details' value={editTicketData.details} onChange={handleChange} defaultValue={currentTicket.details}/>
                <button type="submit">Save Changes</button>
            </form>
            <p className="error-message">&nbsp;{editTicketData.error}</p>
        </div>
        </>
    )

}