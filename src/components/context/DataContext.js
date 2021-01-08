import React, { useState } from 'react';

const Context = React.createContext({})

export function DataContextProvider ({children}) {
    const [dataImg, setdataImg] = useState([]);
    
    return <Context.Provider value={{dataImg, setdataImg}}>
        {children}
    </Context.Provider>
}
export default Context;