import React, { useState, useEffect } from 'react';
import { TESelect, TETextarea } from "tw-elements-react";
import { auth, db } from '../../firebase/firebase';
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import TelegramEmbed from 'react-telegram-embed'
import image from '../../assets/image';

export const UserHomework = () => {

    const [workOpen, setWorkOpen] = useState(false);
    const [workData, setWorkData] = useState([]);
    console.log(workData);

    const [load, setLoad] = useState(true);
    const [modulData, setModulData] = useState([]);
    const [LessonData, setLessonData] = useState([]);
    const [fill, setFil] = useState("");
    const collectionRef = collection(db, "modul-data");
    const collectionLes = collection(db, "lessons");

    useEffect(() => {
        const getUsing = [];
        onSnapshot(collectionRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                getUsing.push({ ...doc.data(), id: doc.id });
            })
            setModulData(getUsing);
            setLoad(false);
        })
    }, [load]);

    console.log(modulData);

    useEffect(() => {
        const getUsing = [];
        onSnapshot(collectionLes, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                getUsing.push({ ...doc.data(), id: doc.id });
            })
            setLessonData(getUsing);
            setLoad(false);
        })
    }, [load]);

    function addEnter(textValue = "text") {
        const enterArr = textValue.split(".");
        console.log(enterArr);
        return enterArr;
    }



    return (
        <div className='w-full h-screen px-[30px] pt-[30px] lg:pl-[120px] sm:pl-[80px] sm:px-[10px] overflow-x-hidden '>
            <div className='w-full h-full  relative'>
                {/* Dashbord Titles */}
                <div className='dashbord__title__bg w-full p-[32px_40px] rounded-[15px] mb-7 sm:p-[20px]'>
                    <div className='text-[#fff] overflow-hidden'>
                        <h2 className='text-[35px] font-bold tracking-[-1.05px] sm:text-[22px]' style={{ fontFamily: "'Open Sans', sans-serif" }}>Are you ready to do your homework?</h2>
                        <p className='max-w-[532px] text-[15px] font-normal leading-[26.3px] tracking-[0.3px] opacity-[0.8] mt-3 sm:text-[12px]'>Please reach out to the Head Teacher if you want them excluded from your domain.</p>
                    </div>
                </div>
                {/* End of */}

                {/* The schedule of lessons */}
                <div className='w-full relative'>
                    <form className='w-full h-[50px] mb-5'>
                        <TESelect data={modulData} search onValueChange={(e) => setFil(e.id)} />
                    </form>

                    <div className='w-full h-[50vh] flex gap-10 justify-center flex-wrap p-5 sm:gap-5 overflow-x-hidden'>
                        {
                            LessonData.filter((val) => val.sellect.includes(fill)).map((val, id) =>
                                <button onClick={() => setWorkOpen(true) & setWorkData(val)} className='w-[300px] p-5 relative bg-white rounded-md flex flex-col gap-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                    <div className='w-full flex justify-between'>
                                        <h2>{val.lessonname}</h2>
                                        <h2>{val.sellect}</h2>
                                    </div>
                                    <div className='flex items-start flex-col pb-5'>
                                        <h3>Tasks:</h3>
                                        <div className='flex flex-col items-start'>
                                            {
                                                addEnter(val.task).map(el =>
                                                    <span className='text-left'>{el}</span>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <span className=' absolute bottom-5'>Date: 2023.11.03</span>
                                </button>
                            )
                        }
                    </div>

                    <div className={`${workOpen ? 'clipping' : 'noClipping'} absolute top-0 left-0 w-full h-full pt-[70px]`}>
                        <button onClick={() => setWorkOpen(false)} className='bg-white border-2 absolute top-5 right-5'>
                            <img src={image.bars_solid} alt="close" />
                        </button>

                        <div className={`w-full h-full ${workOpen ? '' : 'overflow-y-scroll'}`}>
                            <div>
                                <div className='flex justify-between flex-row-reverse items-center m-5'>
                                    <span className='text-2xl text-[#0052B4] uppercase font-extrabold'>{workData.sellect}</span>
                                    <h2 className='text-2xl text-[#0052B4] uppercase font-extrabold'>{workData.lessonname}</h2>
                                </div>

                                <div className='flex flex-col items-center gap-3 my-[50px]'>

                                    <h2 className='text-5xl font-extrabold'>Tasks:</h2>

                                    <div className='flex flex-col font-medium'>
                                        {
                                            addEnter(workData.task).map(el =>
                                                <span className='text-left'>{el}</span>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className='flex flex-col gap-10'>
                                    <div className='w-full h-full'>
                                        <h2 className='text-2xl uppercase font-extrabold text-center'>Lesson Video:</h2>
                                        <TelegramEmbed src={workData.lessonvideolink} />
                                    </div>
                                    <div className='w-full h-[600px] flex justify-center'>
                                        <iframe className='w-full' src={workData.youtubevideolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of The schedule of lessons */}
            </div>
        </div>
    )
}
