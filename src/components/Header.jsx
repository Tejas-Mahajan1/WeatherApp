/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.css';


const Navbar = () => {
  return (
   <nav>
    <nav className="nav">
        <a href="" className="title">Weather  &nbsp; Forcast</a>
         <ul className="nav_menu">
           <li className="nav_item"><a href="Home.html" className="nav_link hover:text-zinc-100 ">Home</a></li>
           <li className="nav_item"><a  href="https://openweathermap.org/about-us" className="nav_link  hover:text-zinc-100" target="_blank" rel="noreferrer">About</a></li>
           <li className="nav_item"><a  href="https://openweather.co.uk/technology" className="nav_link  hover:text-zinc-100" target="_blank" rel="noreferrer">Services</a></li>
           <button className="flex ml-auto text-white bg-slate-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"><a href="Login.html" >Login</a></button>          
           <button className="flex ml-auto text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-400 rounded"><a href="Login.html" target='_blank'>Logout</a></button>          
         </ul>   
    </nav>
   </nav>
  );
}

export default Navbar
