import {createContext,useState} from 'react';

//useContext create global state management
export const AppContext= createContext()

const AppContextProvider = (props)=>{
    const [user,setUser]=useState(null)
    return (
        <AppContext.Provider value={{data,setData,getData}}>
            {props.children}{/* === <App /> */}
        </AppContext.Provider>
    )
}

export default AppContextProvider