import { useState } from 'react'
import AppContext from './CreateContext'

const ContextProvider =( {children})=>{

    const[myInputURL, setMyInputURL] = useState('https://www.youtube.com/watch?v=mcFAaJzAzDw&pp=ygUKZGVhZHBvb2wgMw%3D%3D')


    return (

        <AppContext.Provider 
        value={{ myInputURL, setMyInputURL}} >
        {children}
        </AppContext.Provider>

    )
}

export default ContextProvider