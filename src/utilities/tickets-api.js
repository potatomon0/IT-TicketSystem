import axios from 'axios'
import sendRequest from './send-request'
// import { base } from '../../models/Ticket';
const ticketURL = '/api/user/tickets';

// export function getTickets() {
//     return sendRequest(ticketURL)
// }

export async function createTicket(ticketData) {
    const res = await axios.post(ticketURL, ticketData
    )
    if(res.status === 200){
        return res.data
    }else{
        throw new Error('Invalid Ticket')
    }
}

export async function getTickets(){
    return sendRequest(ticketURL)
    // const res = await axios.get(ticketURL);
    // let info = await res.data
    // console.log(info)
    // // res.ok will be false if the status code set to 4xx in the controller action
    // // if (res.ok) return info
    // // throw new Error('Bad Request');
    // return info
}

export async function deleteTickets(currentTicket){
    console.log('delete ticket',currentTicket)
    return sendRequest(`${ticketURL}/${currentTicket._id}`,'DELETE')
}

export async function editTicket(editedTicket){
    console.log('ticket api',editedTicket)
    return sendRequest(`${ticketURL}/${editedTicket._id}`,'PUT', editedTicket)
    // const res = await axios.put(`${ticketURL}/${editedTicket._id}`,editedTicket)
    // if(res.status === 200){
    //     return res.data
    // }else{
    //     throw new Error('Couldnt update ticket')
    // }
}