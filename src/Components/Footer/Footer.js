import React from 'react'
import { BiCopyright } from 'react-icons/bi'

function Footer() {
    return (
        <div className='footer mt-4 bg-dark text-light p-2'>
            <h6 className='text-center'>All rights reserved <BiCopyright /> 2022 </h6>
            <p className='text-center text-light'>Made by <i>Madhu Vembadi</i></p>
        </div>
    )
}

export default Footer