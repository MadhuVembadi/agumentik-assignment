import React from 'react'
import './Properties.css'

function Properties() {
    return (
        <div className='properties container'>

            <div className='row row-cols-md-4 row-cols-sm-2 row-cols-1'>
                <div className='col'>
                    <img src="https://media.istockphoto.com/id/1158713117/photo/brown-two-story-all-american-home.jpg?s=612x612&w=0&k=20&c=PRsPVVX1JK8Dy0Aa_QQ46EKMO32G8QzK2x5nRjNlyhU=" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Chitaland Towers</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 2,840,000</p>
                </div>
                <div className='col'>
                    <img src="https://media.istockphoto.com/id/1147674297/photo/single-family-new-construction-home-in-suburb-neighborhood-in-the-south.jpg?s=170667a&w=0&k=20&c=DxyrpRYZubuoTxm3zWfSWXCdGBagzjnBN7YvEh1GPXY=" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Tamsani Urbano</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 2,300,000</p>
                </div>

                <div className='col'>
                    <img src="https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/4c51d3d3b1f4db35f43fb88a8828ab3f-full.jpg" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">Borneo Paradiso</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 4,050,000</p>
                </div>

                <div className='col'>
                    <img src="https://i.pinimg.com/736x/03/10/61/03106183f5afd8a90597a7452825f1dc.jpg" className='w-100 d-block mx-auto shadow' />
                    <h6 className="mt-2 ps-2">D'Java Residence</h6>
                    <span className='text-muted ps-2'>Surakarta</span>
                    <p className='mt-2 ps-2'>Rp. 3,250,000</p>
                </div>


            </div>
        </div>
    )
}

export default Properties