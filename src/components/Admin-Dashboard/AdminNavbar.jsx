import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import image from '../../assets/image';

export const AdminNavbar = () => {

    const [toogleNav, setToogleNav] = useState(false);

    console.log(toogleNav);

    return (
        <>
            <div className={`z-[1000] min-w-[300px] h-screen bg-[#0052B4] py-5 flex flex-col justify-between transition-all
                lg:absolute ${toogleNav ? 'lg:min-w-[300px]' : 'lg:min-w-[100px] sm:min-w-[70px]'}
            `}>
                {/* Logo */}
                <Link to='' className='flex justify-center'>
                    <div className={`min-w-[210px] min-h-[50px] bg-white p-3 relative -skew-x-12 
                        ${toogleNav ? 'lg:min-w-[210px] sm:min-w-[135px] sm:min-h-[40px]' : 'lg:min-w-[90px] lg:-skew-x-0 sm:min-w-[50px] sm:min-h-[40px]'}
                    `}>
                        <h2 className='absolute top-[10px] left-4 flex gap-3 font-bold text-[20px] skew-x-12 sm:text-sm sm:left-2'>
                            <span className={`text-[#0052B4] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Homework</span>
                            <span className='bg-[#0052B4] text-[#fff] px-[10px] -skew-x-12 sm:px-1'>
                                PDP
                            </span>
                        </h2>
                    </div>
                </Link>
                {/* End of logo */}

                {/* Nav links */}
                <ul className='w-full flex flex-col items-center gap-[15px] mt-5 text-white relative'>
                    <li className='w-[40px] h-[40px] rounded-full py-2 hidden justify-center bg-white absolute -top-[50px] right-[28px] lg:flex sm:right-[15px] sm:w-[40px]'>
                        {
                            toogleNav ?
                                (
                                    <img src={image.bars_solid} alt="closeIcon" className='w-full h-full' onClick={() => setToogleNav(false)} />
                                )
                                :
                                (
                                    <img src={image.xmark_icon} alt="barsIcon" className='w-full h-full' onClick={() => setToogleNav(true)} />
                                )
                        }
                    </li>
                    <li className='w-full py-[12px] flex justify-center list_item_active'>
                        <Link to='/admin/@JJKHKJ&&68762hjk&98^78675875/87832778723748974787' className={`w-[65px] flex gap-[18px] bg-transparent z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.home_icon} alt="home icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Home</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>
                    <li className='w-full py-[12px] flex justify-center list_item_hover'>
                        <Link to='homework' className={`w-[65px] flex justify-start gap-[18px] z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.record_icon} alt="Students icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Homeworks</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>

                    <li className='w-full py-[12px] flex justify-center list_item_hover'>
                        <Link to='' className={`w-[65px] flex justify-start gap-[18px] z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.student_icon} alt="Students icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Students</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>

                    <li className='w-full py-[12px] flex justify-center list_item_hover'>
                        <Link to='' className={`w-[65px] flex gap-[18px] z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.statistic_icon} alt="Statistics icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Statistics</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>
                    <li className='w-full py-[12px] flex justify-center list_item_hover'>
                        <Link to='settings' className={`w-[65px] flex gap-[18px] z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.setting_icon} alt="Settings icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Settings</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>
                    <li className='w-full py-[12px] flex justify-center list_item_hover'>
                        <Link to='message' className={`w-[65px] flex gap-[18px] z-10 -ml-[50px] lg:-ml-0 ${toogleNav ? 'lg:justify-start' : 'lg:justify-center'}`}>
                            <img src={image.stuff_icon} alt="Staff Room icon" width='25' />
                            <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Message</span>
                        </Link>

                        <div className='liner_div'></div>
                    </li>
                </ul>
                {/* End of Nav links */}


                {/* Log out btn */}
                <button className='flex justify-center gap-[16px] text-[#FF9924] font-bold text-[20px] mb-[30px]'>
                    <img src={image.sign_out_icon} alt="sign out icon" />
                    <span className={`text-bold text-[20px] ${toogleNav ? 'lg:block' : 'lg:hidden'}`}>Sign out</span>
                </button>
                {/* end of Log out btn */}

                {/* <Link to='message'>Message</Link> */}
            </div>
            <Outlet />
        </>
    )
}
