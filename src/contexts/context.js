import {createContext,useState} from 'react';
import { getUser } from "../utilities/users-service";

//useContext create global state management
export const AppContext= createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(getUser())
    const [currentTicket, setCurrentTicket] = useState([])
    const [isSelected, setIsSelected] = useState(false)
    return (
        <AppContext.Provider value={{user,setUser,currentTicket,setCurrentTicket, isSelected, setIsSelected}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider