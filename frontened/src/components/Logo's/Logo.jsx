import React from 'react'
import "./Logo.scss"
import AppContainer from "../AppContainer/AppContainer"
import { ReactComponent as Logo1 } from "./Logos/Nestle.svg"
import { ReactComponent as Logo2 } from "./Logos/Apple_logo_black 1.svg"
import { ReactComponent as Logo3 } from "./Logos/Frame.svg"
import { ReactComponent as Logo4 } from "./Logos/Amazon_logo 2.svg"
import { ReactComponent as Logo5 } from "./Logos/Google.svg"
import { ReactComponent as Logo6 } from "./Logos/Walmart_logo 2.svg"

function Logo() {
  return (
    <AppContainer>
    <div className='logo'>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo5 />
        <Logo6 />
    </div>
    </AppContainer>
  )
}

export default Logo
