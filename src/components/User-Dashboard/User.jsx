import React, { useEffect, useState } from 'react'
import { UserNavbar } from './UserNavbar'
import { UserDashboard } from './UserDashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Loading } from '../../Loading'
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const User = () => {
  const [loading1, setLoading] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  if (user) {
    return (
      <>
        {
          loading1 ?
            <Loading />
            :
            <div className='basic_container flex w-full h-screen'>
              <UserNavbar />
              <Routes>
                <Route path="/" element={<UserDashboard />} />
                {/* <Route path="message" element={<Message />} /> */}
              </Routes>
            </div>
        }
      </>
    )
  } else {
    return navigate('/login');
  }
}
