import {checkToken} from '../../utilities/users-service'

export default function TicketHistoryPage() {
    const handleCheckToken = async()=>{
        const expDate = await checkToken()
        console.log(expDate)
    }
    return(
        <>
        <h1>TicketHistoryPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}