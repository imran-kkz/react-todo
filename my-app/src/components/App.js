import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'
import PropsTest from './PropsTest'

function App (){
    const firstName = "imran"
    const lastName = "kkz"

    const date = new Date()

    return(
        <div>
        {/* <Navbar/>
        <MainContent/>
        <Footer/> */}
        <PropsTest 
            name="Imran Ali"
            imgUrl="http://placekitten.com/300/200"
            phone="416-411-4111"
            email="fakeemail@email.com"/>
        </div>
    )
}
export default App