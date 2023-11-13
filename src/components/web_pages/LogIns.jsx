import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/image';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const SignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                if (email === 'admin@admin.com' && password === 'Axat2005a') {
                    navigate('/admin/@JJKHKJ&&68762hjk&98^78675875/87832778723748974787');
                }else {
                    navigate('/user');
                }
            })
            .catch((error) => {
                alert("Sorry, there was an error" + error.message);
            });
    }

    if (!user) {
        return (
            <div className='w-full' style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className='my-[70px] ml-[136px] max-w-[1272px] flex lg:ml-0 lg:justify-center lg:px-[20px]'>
                    <img src={image.registerImage} alt=""
                        className='w-[60%] h-[600px] absolute right-0 bottom-0 object-contain z-[-1] lg:hidden'
                    />

                    <div className='w-[510px] flex flex-col lg:items-center'>
                        <h2 className='text-[48px] font-bold'>Sign In</h2>

                        <div className='flex items-center gap-[34px] mt-[29px] mb-[34px]'>
                            <hr className='w-[80px] h-[3px] bg-black' />
                            <span className='text-[#FFB7D5] text-base'>Sign in with</span>
                        </div>

                        <form onSubmit={SignIn} className='w-full flex flex-col gap-[20px]'>
                            <label htmlFor="userEmail" className='text-[14px] font-normal'>
                                Email
                                <input type="email" placeholder='abc@abs.com' id='userEmail' required onChange={(e) => setEmail(e.target.value)}
                                    className='mt-2 w-full border-2 px-[17px] py-[14px] rounded-[10px] bg-[#FAFDFF] border-[#E8E8E8] placeholder:opacity-[0.4] placeholder:tracking-[0.25px]'
                                />
                            </label>
                            <label htmlFor="userPass" className='text-[14px] font-normal'>
                                Password
                                <input type="password" placeholder='*************' id='userPass' required onChange={(e) => setPassword(e.target.value)}
                                    className='mt-2 w-full border-2 px-[17px] py-[14px] rounded-[10px] bg-[#FAFDFF] border-[#E8E8E8] placeholder:opacity-[0.4] placeholder:tracking-[0.25px]'
                                />
                            </label>

                            <button className='w-[120px] h-[60px]'>
                                <img src={image.arrowBtn} alt="arrow btn" className='w-full mt-[-10px]' />
                            </button>

                            <h2 className='text-[16px] font-normal tracking-[0.48px] mt-[20px] lg:flex lg:flex-col'>Already have an account?  <Link to='/registration' className='text-[#FFB7D5] font-medium'>Sign up</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        if (email === 'admin@admin.com' && password === 'Axat2005a') {
            navigate('/admin');
        }else {
            navigate('/user');
        }
    }
}