import React from 'react'
import '../Properties/Properties.css'

function AllCategories() {
    return (
        <div className='properties container'>

            <div className='row row-cols-md-4 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                    <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Chitaland Towers</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 2,840,000</p>
                </div>
                <div className='col'>
                    <img src="https://i.pinimg.com/originals/34/2a/74/342a744215f9fb48d7111a59b57b2ad8.png" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Tamsani Urbano</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 2,300,000</p>
                </div>

                <div className='col'>
                    <img src="https://thumbs.dreamstime.com/b/dream-home-luxury-home-luxurious-brick-house-exterior-106105256.jpg" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Borneo Paradiso</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 4,050,000</p>
                </div>

                <div className='col'>
                    <img src="https://i.pinimg.com/736x/fc/b4/dd/fcb4dd0da70ba6564402975f8dcf454c.jpg" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">D'Java Residence</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 3,250,000</p>
                </div>


            </div>
        </div>
    )
}

export default AllCategories