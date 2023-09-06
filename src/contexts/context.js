import {createContext,useState} from 'react';
import { getUser } from "../utilities/users-service";

//useContext create global state management
export const AppContext= createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(getUser())
    const [currentTicket, setCurrentTicket] = useState([])
    return (
        <AppContext.Provider value={{user,setUser,currentTicket,setCurrentTicket}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider