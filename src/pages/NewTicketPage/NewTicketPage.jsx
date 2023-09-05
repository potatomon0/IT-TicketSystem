import TicketForm from '../../components/TicketForm/TicketForm'

export default function NewTicketPage({user}) {
  return (
    <div>
      <h1>NewTicketPage</h1>

      <TicketForm user={user}/>
    </div>
  )
}