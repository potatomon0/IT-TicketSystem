import { AppContext } from '../../contexts/context'
import { useContext } from 'react';

export default function TicketDetail() {
    const { currentTicket } = useContext(AppContext)
    return (
        <>
            <div>{currentTicket.email}</div>
        </>
    )
}