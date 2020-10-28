import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

function App (){
    const firstName = "imran"
    const lastName = "kkz"

    return(
        <div>
            <p>{firstName + " " + lastName}</p>
        <Navbar/>
        <MainContent/>
        <Footer/>
        </div>
    )
}
export default App