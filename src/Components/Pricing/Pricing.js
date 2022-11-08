import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import './Pricing.css'
import { AiOutlineSearch } from 'react-icons/ai'

function Pricing() {
    return (
        <div className='pricing container'>

            <div className='row row-cols-4 justify-content-between top-bar'>
                <div className='col m-2 p-2 top-bar-search'>
                    <AiOutlineSearch color='black' className="top-bar-searchIcon" size={20} />Enter an address, city or ZIP code
                </div>
                <div className='col m-2 p-2'>
                    For:Sale<IoIosArrowDown />
                </div>
                <div className='col m-2 p-2'>
                    Type: House<IoIosArrowDown />
                </div>
                <div className='col  m-2 p-2'>
                    Min: $100k<IoIosArrowDown />
                </div>
                <div className='col m-2 p-2'>
                    Max: $200k<IoIosArrowDown />
                </div>
                <div className='col  m-2 p-2'>
                    Floor area: 60 msq<IoIosArrowDown />
                </div>
            </div>
            <div className='row row-cols-md-2 row-cols-1 mt-4'>
                <div className='col'>
                    <div className='row row-cols-md-2 row-cols-1'>
                        <div className='col mb-4'>
                            <img src="https://i.pinimg.com/736x/74/d3/14/74d31471c7185ff919db2ba08177ca23--digital-illustration-simple-vector-illustration.jpg" className='w-100 d-block mx-auto shadow' />
                            <h6 className='mt-3'>$699 678</h6>
                            <span className='mt-2 text-muted'>3517 W. Gray St.Utica Pennsylvania 57867</span>
                        </div>
                        <div className='col  mb-4'>
                            <img src="https://cdn.dribbble.com/users/2479517/screenshots/14092385/media/b01efaa0630d693d53e473c8f593674c.jpg?compress=1&resize=400x300&vertical=top" className='w-100 d-block mx-auto shadow' />
                            <h6 className='mt-3'>$699 678</h6>
                            <span className='mt-2 text-muted'>3517 W. Gray St.Utica Pennsylvania 57867</span>
                        </div>
                        <div className='col  mb-4'>
                            <img src="https://assets.materialup.com/uploads/93767557-e6b3-4655-8eca-92cd281e9cfe/attachment.png" className='w-100 d-block mx-auto shadow' />
                            <h6 className='mt-3'>$699 678</h6>
                            <span className='mt-2 text-muted'>3517 W. Gray St.Utica Pennsylvania 57867</span>
                        </div>
                        <div className='col  mb-4'>
                            <img src="https://img.freepik.com/free-vector/houses-sale-rent-flat-design-illustration_23-2148653893.jpg?w=2000" className='w-100 d-block mx-auto shadow' />
                            <h6 className='mt-3'>$699 678</h6>
                            <span className='mt-2 text-muted'>3517 W. Gray St.Utica Pennsylvania 57867</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <img src="https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?w=740&t=st=1667919005~exp=1667919605~hmac=23d72f198fcd86af9484506d7a14962ed65ee8702592ef533e7005012e2dd75b" className='w-100' />
                </div>
            </div>
        </div>
    )
}

export default Pricing