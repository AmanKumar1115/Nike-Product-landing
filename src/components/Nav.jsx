// import {headerLogo} from '../assets/images';
// import {hamburger} from '../assets/icons';
// import { navLinks } from '../constants';


// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//         <nav className='flex justify-between items-center max-container'>
//             <a href='/'>
//                 <img
//                     src={headerLogo}
//                     alt='logo'
//                     width={130}
//                     height={29}
//                 />
//             </a>
//             <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//               {navLinks.map((item) =>(
//                 <li key={item.label}>
//                   <a
//                     href={item.href}
//                     className='font-montserrat leading-normal text-lg test-slate-gray'
//                   >
//                     {item.label}
//                   </a>

//                 </li>
//               ))}
//             </ul>
//             <div className='hidden max-lg:block '>
//                 <img 
//                   src={hamburger}
//                   alt='humberger'
//                   width={25}
//                   height={25}
//                 />
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Nav

import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from "react";


const Nav = () => {
  const [toggleDropdown, setToggleDropdown] =  useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img
                    src={headerLogo}
                    alt='logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item) =>(
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg test-slate-gray'
                  >
                    {item.label}
                  </a>

                </li>
              ))}
            </ul>
            <div className='hidden max-lg:block '>
                <img 
                  src={hamburger}
                  alt='humberger'
                  width={25}
                  height={25}
                  onClick={()=> setToggleDropdown((prev)=>!prev)}
                />
                {
                  toggleDropdown && (
                    <div className='dropdown'>
                      {navLinks.map((item) =>(
                        <div key={item.label}>
                          <a
                            href={item.href}
                            className='dropdown_link'
                          >
                            {item.label}
                          </a>
                        </div>
                      ))}
                        
                    </div>
                  )
                }
            </div>
        </nav>
    </header>
  )
}

export default Nav
