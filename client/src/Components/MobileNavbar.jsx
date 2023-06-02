import {Routes, Route, Link} from "react-router-dom"
import {Link as Scroll} from 'react-scroll' 
import React, {useState} from 'react'
import {RxHamburgerMenu } from 'react-icons/rx'


export default function MobileNavbar(){

    const [navbar,setNavbar] = useState(false)

    function toggleMobile(){
        setNavbar(!navbar)
    }

    return (
        <div id='mobile' className="">
                <nav  className={'px-2 py-5  bg-white items-center' }>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h1 className="font-bold text-sm tracking-wider">infoMovie App</h1>
                        
                    </div>
                    <RxHamburgerMenu className=' cursor-pointer mr-2 ' onClick={toggleMobile} size='2em'  />
                </div>

                <div className={navbar ? "flex justify-center tracking-wide w-full z-50 bg-white" : "hidden"} id="navbar-hamburger">
                    <ul id='mobileNavbar' className = "flex flex-col uppercase text-lg text-center ml-8 pt-10">
                    <li className="ml-8">
							<Link to="/LandingPage">Home</Link>
						</li>
                        <li className="ml-8">
                            <Link to="/About">
                                <Scroll activeClass="active"
                                to="About" spy={true} smooth={true} offset={50} duration={500}>About</Scroll>

                            </Link>
						</li>
						<li className="ml-8">
							<Link to="/searchStyle">Search</Link>
						</li>
						<li className="ml-8">
							<Link  to="/Favorites">Favorites</Link>
						</li>
                            </ul>
                </div>
                </nav>

            </div>
    )
}