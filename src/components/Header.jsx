import React from 'react'
import NavMenuIcon from '../assets/nav-menu-icon.svg'
import CartIcon from '../assets/cart.svg'
import SiteLogo from '../assets/site-icon.svg'

function Header() {
    //variables
    let navMenu = document.getElementById('mobile-nav-menu')
    let navMenuIcon = document.getElementById('nav-menu-icon')
    let navMenuCloseIcon = document.getElementById('nav-menu-close-icon')
    let searchIcon = document.getElementById('search-icon')
    let searchBox = document.getElementById('search-box')
    let searchBoxCloseIcon = document.getElementById('search-box-close-btn')

    //function to open navigation menu
    function openMenu(){
        navMenu = document.getElementById('mobile-nav-menu').style.display = 'block';
        navMenuIcon = document.getElementById('nav-menu-icon').style.display = 'none'
        navMenuCloseIcon = document.getElementById('nav-menu-close-icon').style.display = 'block'
    }

    //function to close navigation menu
    function closeMenu(){
        navMenu = document.getElementById('mobile-nav-menu').style.display = 'none';
        navMenuIcon = document.getElementById('nav-menu-icon').style.display = 'block'
        navMenuCloseIcon = document.getElementById('nav-menu-close-icon').style.display = 'none'
    }

    function openSearchBox(){
        searchBox = document.getElementById('search-box').style.display = 'block'
        searchBoxCloseIcon = document.getElementById('search-box-close-btn').style.display = 'block'
    }

    function closeSearchBox(){
        searchBox = document.getElementById('search-box').style.display = 'none'
        searchBoxCloseIcon = document.getElementById('search-box-close-btn').style.display = 'none'
    }
  return (
   <>
    <div className='container flex justify-between items-center md:hidden'>
        <div className="site-logo font-bold w-[150px]">
           <img src={SiteLogo} alt="site logo" />
        </div>
      
        <div className="mobile-nav-menu hidden absolute mt-[300px] rounded-lg text-white bg-slate-600 p-2 w-[90%] h-auto" id='mobile-nav-menu'>
            <p className="nav-link"><a href="#">Home</a></p>
            <p className="nav-link"><a href="#">Shop</a></p>
            <p className="nav-link"><a href="#">About</a></p>
            <p className="nav-link"><a href="#">Contact us</a></p>
            <p className="nav-link primary-btn"><a href="#">Login</a></p>
            <p className="nav-link secondary-btn "><a href="#">SignUp</a></p>
        </div>

       <div className='flex gap-2'>
            <div id='search-icon' onClick={openSearchBox}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </div>
           
             <div className="cart">
                <img src={CartIcon} alt="cart" />
                <div className='relative -top-6 left-3 bg-black text-white text-center rounded-full w-4 h-4 text-xs'>
                    <p>0</p>
                </div>
            </div>

            <div className="md:hidden nav-menu-icon cursor-pointer hidden" id='nav-menu-close-icon' onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            </div>
            
            <div className="md:hidden nav-menu-icon cursor-pointer" id='nav-menu-icon' onClick={openMenu}>
                <img src={NavMenuIcon} alt="Menu Icon" />
            </div>
       </div>
    </div>
           
            {/**MEDIUM SCREEN HEADER */}
    <div className='container hidden w-[100%] h-[100px] md:flex justify-between items-center'>
    <div className="site-logo font-bold w-[150px]">
           <img src={SiteLogo} alt="site logo" />
        </div>
      
        <div className="nav-menu flex justify-center items-center gap-4 text-sm" id='nav-menu'>
            <p className="nav-link"><a href="#">Home</a></p>
            <p className="nav-link"><a href="#">Shop</a></p>
            <p className="nav-link"><a href="#">About</a></p>
            <p className="nav-link"><a href="#">Contact us</a></p>
            <p className="nav-link primary-btn"><a href="#">Login</a></p>
            <p className="nav-link secondary-btn "><a href="#">SignUp</a></p>
        </div>

       <div className='flex gap-2'>
            <div id='search-icon' onClick={openSearchBox}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </div>
             <div className="cart">
                <img src={CartIcon} alt="cart" />
                
            </div>
       </div>
    </div>
       {/*SEARCH BOX */}
       <div className='w-[100%] flex justify-center items-center mb-4'>
                <div className='ml-4 hidden' id='search-box'>
                     <input type="text" className='border p-2 rounded-xl w-[90%] ' placeholder='Search'/>
                </div>

                 <div className='hidden' id='search-box-close-btn' onClick={closeSearchBox}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
            </div>
   </>
  )
}

export default Header