import React from 'react';
import Image from 'next/image'
import hamburger from '../Assets/hamburger.jpg'
import SM_Icon from '../Assets/SM_Icon.png'

const Navbar = () => {
    return (
        <header className='flex justify-between px-2 py-4 bg-gray-500'>
            <div>
                <Image src={SM_Icon} alt='logo' />
            </div>


            <div className="flex  ">
                <button className='block justify-end h-8 w-8'>
                    <Image src={hamburger} alt='mobile menu' />
                </button>
            </div>

        </header>
    );
}

export default Navbar;
