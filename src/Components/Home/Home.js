import React from 'react'
import './Home.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'
import { NavLink, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import Properties from '../Properties/Properties'
import { useState } from 'react';
import AllCategories from '../AllCategories/AllCategories'


function Home() {

    let [cat, setCat] = useState(1);


    const changeProperties = (event) => {
        let i = event.target.getAttribute("value");

        let l = document.getElementsByClassName("nested-navbarlink");

        let arr = Array.from(l);
        console.log(arr);
        arr.forEach((item) => {
            let str = item.getAttribute("class");

            let n = str.replace("current", "");

            item.setAttribute("class", n);

        });

        setCat(i);

        let str = arr[i - 1].getAttribute("class");
        str = str + " current"
        arr[i - 1].setAttribute("class", str);


    }


    return (
        <div className='home w-100'>
            <div className='head'>
                <div className='container left-content '>

                    <h1 className='w-75 mx-auto p-5'>
                        Easy way to find the property according to your choice.
                    </h1>

                    <p className='text-muted w-md-50 w-75 mt-4 mx-auto'>We provide various property models for you at affordable prices and the best quality</p>

                    <div className='search row mt-4 mb-4'>
                        <div className='col mt-2'>
                            <p className='text-muted'>Location<IoIosArrowDown /></p>
                            <p className='text-dark'>Jakarta, Indonesia</p>
                        </div>
                        <div className='col d-md-inline d-none mt-2'>
                            <p className='text-muted'>Property type<IoIosArrowDown /></p>
                            <p className='text-dark'>Minimalist House</p>
                        </div>
                        <div className='col d-md-inline d-none  mt-2'>
                            <p className='text-muted'>Price Range<IoIosArrowDown /></p>
                            <p className='text-dark'>20,0000 - 50,000</p>
                        </div>
                        <div className='col search-button'>
                            <AiOutlineSearch color='white' className="searchIcon" size={50} />
                        </div>
                    </div>

                    <div className='tags d-flex flex-row justify-content-around mb-4 container'>
                        <span><TiTick />100% best quality guarantee</span>
                        <span><TiTick />More affordable price</span>
                    </div>

                </div>
                <div className='side-img mx-auto'>
                    <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1910&q=80" className='w-100 p-0' />
                </div>

            </div>

            <div className="home-body">

                <h3 className='text-center w-75 mx-auto'>Our Property</h3>
                <p className='text-muted text-center mx-auto w-75 text-center'>We provide various type of properties for you with different categories</p>


                <ul>

                    <li className="m-2">
                        <a eventKey="1" as={NavLink} to="/" className="text-muted nested-navbarlink current" value="1" onClick={changeProperties}>
                            Popular
                        </a>
                    </li>


                    <li className="m-2">
                        <a eventKey="2" as={NavLink} to="/" value="2" onClick={changeProperties} className="text-muted text-center nested-navbarlink">
                            All Categories
                        </a>
                    </li>

                    <li className="m-2">
                        <a eventKey="3" as={NavLink} to="/" value="3" onClick={changeProperties} className="text-muted nested-navbarlink">
                            Minimalist
                        </a>
                    </li>

                    <li className="m-2">
                        <a eventKey="4" as={NavLink} to="/" value="4" onClick={changeProperties} className="text-muted nested-navbarlink">
                            Modern
                        </a>
                    </li>

                    <li className="m-2">
                        <a eventKey="5" as={NavLink} to="/" value="5" onClick={changeProperties} className="text-muted nested-navbarlink">
                            Classical
                        </a>
                    </li>
                </ul>


                {
                    (cat == 1 || cat == 3 || cat == 5) &&
                    <Properties />
                }
                {
                    (cat == 2 || cat == 4) && <AllCategories />
                }



            </div>

        </div>
    )
}

export default Home