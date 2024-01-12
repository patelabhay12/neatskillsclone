import Image from 'next/image'
import Link from 'next/link';
import LOGO from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className="w-full  max-w-[1440px] px-3 py-5  lg:px-7 lg:py-11 md:flex md:flex-row md:justify-between">
                <div className="w-full px-2 md:w-auto flex justify-between align-middle mb-[50px] gap-20">
                    <Link href={"/"}>
                        <Image src={LOGO} alt="footer logo" className='object-contain w-[116px] md:w-48 lg:w-64 flex-shrink-0' />
                    </Link>

                    <div className="pl-5 flex  grid-cols-2 gap-x-14 gap-y-6 md:gap-x-[92px] md:gap-y-0 my-[50px] md:mt-[100px] md:mb-0 md:px-5 lg:px-10">
                        <div className="whitespace-nowrap text-white space-y-[7px] md:xl:space-y-[25px]">
                            <h4 className='font-ral text-sm md:text-lg xl:text-xl font-semibold  md:font-normal whitespace-nowrap '>Company Information</h4>
                            <div className="font-Inter space-y-[5px]  md:space-y-[14px] xl:space-y-[19px] pl-1">
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>About us</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Help</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Privacy Policy</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Terms and Conditions</p>
                            </div>
                        </div>

                        <div className="whitespace-nowrap text-white space-y-[7px] md:xl:space-y-[25px]">
                            <h4 className='font-ral text-sm md:text-lg xl:text-xl font-semibold  md:font-normal whitespace-nowrap '>Popular Courses</h4>
                            <div className="undefined text-white space-y-[7px] md:xl:space-y-[25px]">
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Ux Fundamentals</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Python Coading</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Maths</p>
                                <p className='block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] '>Introduction to C++</p>
                            </div>
                        </div>

                    </div>

                    <div className="hidden md:flex flex-col justify-end">
                        <div className="text-white text-inter text-sm lg:text-xl mb-4 ">Follow Us</div>
                        <div className="md:flex flex space-x-[12px] md:space-x-[24px] xl:space-x-[40px] text-white ">
                            <h1>Icons hai bhai</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full text-white text-sm text-center pb-2">
                <h1>© neatskills.online managed by Provoke Developers Private Limited</h1>
            </div>

            <div className="px-5 text-white text-sm 32 p-2 ">
                <p className='text-white'>Address : Provoke Developers Private Limited, C/O Raviraj Kumar, Jai Prakash Nagar, Bhurkunda, Ramgarh, Jharkhand</p>
            </div>
        </div>
    )
}

export default Footer;