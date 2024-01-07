import React from 'react';
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='border-border-gray border-t-[1px]'>
        <div className='padding-container flex justify-between max-container-nav'>
            <div>
                <Link to="/" className='text-[36px] leading-[110%]' onClick={() => window.scrollTo({ top: 0 })}>GOO<br/>D<br/>FOO<br/>D</Link>
            </div>
            <div>
                <h3 className='text-[14px] font-poppins-semi-bold tracking-[2px] mb-[15px]'>Info</h3>
                <p className='text-gray64 text-[12px] tracking-[1px]'>Contacts, privacy, cookie policy</p>
            </div>
            <div>
                <h3 className='text-[14px] font-poppins-semi-bold tracking-[2px] mb-[15px]'>Social</h3>
                <ul className='flex flex-col gap-[10px] text-gray64 text-[12px] tracking-[1px]'>
                    {socialLinks.map((link, index) => (
                        <li key={index}> 
                            <a href="#" className='flex gap-[18px]'>
                                <img src={link.icon} alt="icon" />
                                <span>{link.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='text-center text-[12px] text-gray64 pt-[30px] mb-[10px] border-border-gray border-t-[1px]'>
            <p>@2024 GOOD FOOD. ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer