import React from 'react';
import Image from 'next/image'
import SM_Icon from '../Assets/SM_Icon.png'




const Navbar = () => {
    return (
        <header className='px-2 py-4 bg-gray-500'>

            <div className='flex justify-center lg:justify-start px-2 text-white'>
                {/* <Image src={SM_Icon} alt='logo' /> */}
                Smoky Mtn. 
            </div>





        </header>
    );
}

export default Navbar;
