import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import image from '../../assets/image';
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [using, setUsing] = useState([]);

  const docRef = doc(db, "users", user.uid);
  useEffect(() => {
    const docCall = async () => {
      const docSnap = await getDoc(docRef);
      setUsing(docSnap.data());
    }
    docCall();
  }, []);

  // console.log(using);

  const data = [
    {
      name: 'Les 1',
      percentage: 30,
      appropriation: 30
    },
    {
      name: 'Les 2',
      percentage: 20,
      appropriation: 20
    },
    {
      name: 'Les 3',
      percentage: 45,
      appropriation: 45
    },
    {
      name: 'Les 4',
      percentage: 25,
      appropriation: 25
    },
    {
      name: 'Les 5',
      percentage: 55,
      appropriation: 55
    },
    {
      name: 'Les 6',
      percentage: 75,
      appropriation: 75
    },
    {
      name: 'Les 7',
      percentage: 100,
      appropriation: 100
    },
  ];


  return (
    <div className='w-full h-screen px-[30px] pt-[30px] lg:pl-[120px] sm:pl-[80px] sm:px-[10px] overflow-x-hidden '>
      <div className='border-2 w-full h-full relative'>
        {/* Dashboard nav Panel */}
        <div className='flex items-center justify-end gap-[43px]'>
          <div className='flex items-center gap-1'>
            <img src={image.sun_icon} alt="sunn icon" />

            <div className='w-[40px] h-[13px] bg-[#0052B4] rounded-[7px] relative'>
              <span className='w-[20px] h-[20px] absolute left-[-2px] top-[-3.5px] bg-white rounded-full'></span>
            </div>

            <img src={image.moon_icon} alt="moon icon" />
          </div>

          <div className='flex items-center gap-[21px]'>
            <div className='relative'>
              <img src={image.notif_icon} alt="notifications" />
              <span className='bg-[#ff0000] w-[10px] h-[10px] text-[6px] font-bold flex justify-center items-center font-sans rounded-full absolute top-[3px] right-[1px]'>1</span>
            </div>

            <Link to=''>
              <img src={image.setting_icon_gray} alt="settings" className='stroke-[#8B8C8C]' />
            </Link>

            <div className='w-[50px] h-[50px] px-[4.5px] py-[4.5px] border-2 rounded-[10px] border-[#0052B4] user__modal'>
              <img src={using.photoURL} alt="userImage" className='w-full h-full object-cover rounded-[10px] border-[1px]' />
              <div className='absolute top-[55px] right-0 w-[250px] h-[100px] p-3 bg-white shadow-2xl shadow-black'>
                <h2>User Name: {using.name}</h2>
                <h2>Email: {using.email}</h2>
                <h2>User coin: 350</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End of Dashboard nav Panel */}

        {/* Dashbord Titles */}
        <div className='dashbord__title__bg w-full p-[32px_40px] rounded-[15px] mt-[22px] sm:p-[20px]'>
          <div className='text-[#fff] overflow-hidden'>
            <h2 className='text-[35px] font-bold tracking-[-1.05px] sm:text-[22px]' style={{ fontFamily: "'Open Sans', sans-serif" }}>Welcome back, {"Hikmatjon"}</h2>
            <p className='max-w-[532px] text-[15px] font-normal leading-[26.3px] tracking-[0.3px] opacity-[0.8] mt-3 sm:text-[12px]'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
          </div>
        </div>
        {/* End of */}

        {/* Dashbord visible panel */}
        <div className='flex gap-5 mt-8 xl:flex-wrap xl:justify-between'>

          {/* Student statistics */}
          <div className='min-w-[50%] shadow-md flex flex-col items-center px-[15px] py-[25px] md:w-full xl:min-w-0 xl:w-full'>
            <div>
              <h2 className='text-[18px] font-medium leading-[28px] mb-[32px]'>Student Work Statistic</h2>
            </div>

            <div className='w-full h-[270px] xl:h-[400px]'>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: -20,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percentage" barSize={15} fill="#413ea0" />
                  <Line type="monotone" dataKey="appropriation" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* End of */}

          {/* Upcoming Activities */}
          <div className='w-full px-[19px] py-[17px] shadow-md'>
            <h2 className='text-[#272835] text-[18px] font-medium leading-[20px] mb-3'>Upcoming Activities</h2>
            <div className='h-[321px] overflow-x-hidden overflow-y-scroll flex flex-col items-center gap-2 pr-2'>
              {/* ----------------- */}
              <div className='w-full shadow-lg bg-[#F0F7FF] rounded-[5px] p-[15px] flex items-center gap-[23px]'>
                <div className='flex items-center justify-center bg-[#0052B4] w-[36px] h-[36px] rounded-lg'>
                  <span className='text-white text-sm font-normal'>31</span>
                </div>

                <div className='flex flex-col gap-[2px]'>
                  <h3 className='text-[#333] text-[15px] font-bold flex items-center gap-[13px]'>
                    <span>Meeting with the VC</span>
                    <span className='flex items-center gap-1'>
                      <div className='w-[6px] h-[6px] bg-[#0052B4] rounded-full'></div>
                      <h4 className='text-[#8A8A8A] text-[10px] font-bold flex items-center gap-1'>
                        <span>10 A.M</span> -
                        <span>11 A.M</span>
                      </h4>
                    </span>
                  </h3>
                  <div className='flex items-center gap-[13px] text-[10px] font-bold'>
                    <Link to='' className='text-[#0052B4] decoration-[#0052B4] underline'>Meeting link//www.zoom.com</Link>
                    <span className='text-[#FF1515]'>Due soon</span>
                  </div>
                </div>
              </div>
              {/* -------------- */}
              {/* ----------------- */}
              <div className='w-full shadow-lg bg-[#F0F7FF] rounded-[5px] p-[15px] flex items-center gap-[23px]'>
                <div className='flex items-center justify-center bg-[#0052B4] w-[36px] h-[36px] rounded-lg'>
                  <span className='text-white text-sm font-normal'>31</span>
                </div>

                <div className='flex flex-col gap-[2px]'>
                  <h3 className='text-[#333] text-[15px] font-bold flex items-center gap-[13px]'>
                    <span>Meeting with the VC</span>
                    <span className='flex items-center gap-1'>
                      <div className='w-[6px] h-[6px] bg-[#0052B4] rounded-full'></div>
                      <h4 className='text-[#8A8A8A] text-[10px] font-bold flex items-center gap-1'>
                        <span>10 A.M</span> -
                        <span>11 A.M</span>
                      </h4>
                    </span>
                  </h3>
                  <div className='flex items-center gap-[13px] text-[10px] font-bold'>
                    <Link to='/' className='text-[#0052B4] decoration-[#0052B4] underline'>Meeting link//www.zoom.com</Link>
                    <span className='text-[#FF1515]'>Due soon</span>
                  </div>
                </div>
              </div>
              {/* -------------- */}
              {/* ----------------- */}
              <div className='w-full shadow-lg bg-[#F0F7FF] rounded-[5px] p-[15px] flex items-center gap-[23px]'>
                <div className='flex items-center justify-center bg-[#0052B4] w-[36px] h-[36px] rounded-lg'>
                  <span className='text-white text-sm font-normal'>31</span>
                </div>

                <div className='flex flex-col gap-[2px]'>
                  <h3 className='text-[#333] text-[15px] font-bold flex items-center gap-[13px]'>
                    <span>Meeting with the VC</span>
                    <span className='flex items-center gap-1'>
                      <div className='w-[6px] h-[6px] bg-[#0052B4] rounded-full'></div>
                      <h4 className='text-[#8A8A8A] text-[10px] font-bold flex items-center gap-1'>
                        <span>10 A.M</span> -
                        <span>11 A.M</span>
                      </h4>
                    </span>
                  </h3>
                  <div className='flex items-center gap-[13px] text-[10px] font-bold'>
                    <Link to='/' className='text-[#0052B4] decoration-[#0052B4] underline'>Meeting link//www.zoom.com</Link>
                    <span className='text-[#FF1515]'>Due soon</span>
                  </div>
                </div>
              </div>
              {/* -------------- */}
              {/* ----------------- */}
              <div className='w-full shadow-lg bg-[#F0F7FF] rounded-[5px] p-[15px] flex items-center gap-[23px]'>
                <div className='flex items-center justify-center bg-[#0052B4] w-[36px] h-[36px] rounded-lg'>
                  <span className='text-white text-sm font-normal'>31</span>
                </div>

                <div className='flex flex-col gap-[2px]'>
                  <h3 className='text-[#333] text-[15px] font-bold flex items-center gap-[13px]'>
                    <span>Meeting with the VC</span>
                    <span className='flex items-center gap-1'>
                      <div className='w-[6px] h-[6px] bg-[#0052B4] rounded-full'></div>
                      <h4 className='text-[#8A8A8A] text-[10px] font-bold flex items-center gap-1'>
                        <span>10 A.M</span> -
                        <span>11 A.M</span>
                      </h4>
                    </span>
                  </h3>
                  <div className='flex items-center gap-[13px] text-[10px] font-bold'>
                    <Link to='/' className='text-[#0052B4] decoration-[#0052B4] underline'>Meeting link//www.zoom.com</Link>
                    <span className='text-[#FF1515]'>Due soon</span>
                  </div>
                </div>
              </div>
              {/* -------------- */}

            </div>
          </div>

          {/* End of Upcoming Activities */}
        </div>

        {/* End of */}
      </div>
    </div>
  )
}
