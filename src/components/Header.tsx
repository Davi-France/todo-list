import React from 'react'
import styled from './Header.module.css'
import logo from '../assets/logo.svg'



const Header = () => {
    return (

        <div className={styled.header}>
            <img src={logo} alt="" />
        </div>

    )
}

export default Header