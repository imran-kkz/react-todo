import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

function App (){
    const firstName = "imran"
    const lastName = "kkz"

    const date = new Date()

    return(
        <div>
        <Navbar/>
        <MainContent/>
        <Footer/>
        </div>
    )
}
export default App