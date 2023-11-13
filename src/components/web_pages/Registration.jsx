import React, { useState } from 'react'
import image from '../../assets/image';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Registration = () => {
  const navigate = useNavigate();
  const [user, loadings] = useAuthState(auth);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState("");

  const handleImgChange = (e) => {
    setAvatar(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);

      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              password,
              photoURL: downloadURL,
              timestamp: serverTimestamp(),
            });

            //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {});
            // navigate("/");
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(user.uid);

  if (!user) {
    return (
      <div className='w-full flex justify-center' style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className='my-[10px] max-w-[1272px] flex lg:ml-0 justify-center lg:px-[20px]'>
          <div className=' max-w-[510px] flex flex-col lg:items-center'>
            <h2 className='text-[48px] font-bold text-center'>Sign Up</h2>

            <div className='flex items-center justify-center gap-[34px] mt-[29px] mb-[34px]'>
              <hr className='w-[80px] h-[3px] bg-black' />
              <span className='text-[#FFB7D5] text-base'>Sign up with</span>
            </div>

            <div className='flex flex-wrap justify-center gap-[14px] '>
              <button className='flex items-center gap-[13px] text-[#494949] text-[12px] font-medium px-[38px] py-[15px] border-2 rounded-[6px] bg-white lg:w-full lg:justify-center'>
                <img src={image.googleIcon} alt="google icon" />
                Continue with Google
              </button>
              <button className='flex items-center gap-[13px] text-[#494949] text-[12px] font-medium px-[38px] py-[15px] border-2 rounded-[6px] bg-white lg:w-full lg:justify-center'>
                <img src={image.facebokIcon} alt="facebok icon" />
                Continue with Google
              </button>
            </div>

            <h2 className='text-[20px] font-medium tracking-[0.6px] w-full text-center my-[40px]'>or</h2>

            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[20px]'>
              <div className='w-full flex justify-center' >
                {avatar ? (
                  <img src={URL.createObjectURL(avatar)} alt="" className='w-[200px] h-[200px] rounded-[100%] object-cover object-center' />
                ) : (
                  <img src={image.avatar} alt="" className='w-[200px] h-[200px] rounded-[100%] object-cover' />
                )}
              </div>

              <label htmlFor="dropImage" className='w-full h-[100px] bg-white border-2 flex justify-center'>
                <img src={image.uploadImg} alt="" className='h-full' />
              </label>
              <input type="file" accept='.jpg, .svg, .gif, .png' id='dropImage' className='absolute' hidden onChange={handleImgChange} />

              <label htmlFor="userName" className='text-[14px] font-normal'>
                Name
                <input type="text" placeholder='abc' id='userName' required onChange={(e) => setName(e.target.value)}
                  className='mt-2 w-full border-2 px-[17px] py-[14px] rounded-[10px] bg-[#FAFDFF] border-[#E8E8E8] placeholder:opacity-[0.4] placeholder:tracking-[0.25px]'
                />
              </label>
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


              <button type='submit' className='w-[120px] h-[60px]'>
                <img src={image.arrowBtn} alt="arrow btn" className='w-full mt-[-10px]' />
              </button>

              <h2 className='text-[16px] font-normal tracking-[0.48px] mt-[20px] lg:flex lg:flex-col'>Already have an account?  <Link to='/login' className='text-[#FFB7D5] font-medium'>Sign in</Link></h2>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    navigate('/user');
  }
}
