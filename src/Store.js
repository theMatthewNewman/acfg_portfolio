import React from 'react';
import {useState} from 'react';


export const Context = React.createContext();


function Store({children}){
    const [page, setPage]= useState("Home");
    return(
	<Context.Provider value={[page, setPage]}>{children}</Context.Provider>
    );
};


export default Store;
