import React from 'react'
import ProgressBar from '../components'

const Profile = () => {
  return (
    <div className='w-full flex flex-col items-center text-[#012e57]'>
        <div className='w-full flex flex-row items-center py-3 border-b shadow'>
            <svg class="w-4 h-4 mx-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="#012e57" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            <p className='text-sm font-medium'>View Patient</p>
        </div>
        <div className='w-11/12'>
            <div className='w-full flex flex-row items-center justify-center py-8'>
                <div className='w-2/3 flex items-center justify-center'>
                    <div className='w-full flex flex-col justify-center text-sm font-medium pl-2'>
                        <div>
                            <h2>S.Meena, F/23</h2>
                            <h3>Patient ID: 87 20200727153427</h3>
                        </div>
                    </div>
                    <div className='flex w-full justify-end items-center pr-8'>
                        <img src="https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512" alt="profile-image" className='rounded-full w-10 h-10 border-2 border-[#012e57]'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-2/3 flex flex-col bg-[#012e57] rounded items-center justify-center border shadow'>
                    <div className='w-full flex items-center justify-center pt-4'>
                        <div className='font-medium text-white'>GOAL REACHED</div>
                    </div>
                    <div className='w-full flex flex-row justify-center items-center pb-2'>
                        <div className='w-3/5 flex items-start justify-center h-28 overflow-hidden'>
                            <ProgressBar/>
                        </div>
                        <div className='w-2/5 flex py-4 flex-col justify-center items-center'>
                            <div className='relative flex flex-col p-1 mb-3 bg-white rounded'>
                                <h3 className='w-28 h-10 text-xs'>EMG</h3>
                                <img className='absolute h-12 w-32' src='https://thenounproject.com/api/private/icons/1181536/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=true&flipY=false&foregrounfColor=%2371D358&foregroundOpacity=1&imageFormat=png&rotation=0'/>
                            </div>
                            <div className='relative flex flex-col p-1 bg-white rounded'>
                                <h3 className='w-28 h-10 text-xs'>ROM</h3>
                                <img className='absolute h-12 w-32' src='https://thenounproject.com/api/private/icons/1181536/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23FF001C&foregroundOpacity=1&imageFormat=png&rotation=0'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-col justify-center items-center text-sm w-full mb-8 mt-1'>
                <div className='w-2/3 flex flex-row justify-center items-center py-4 border shadow'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-2/3 flex flex-col py-1'>
                            <p className='py-1'>Phone no.</p>
                            <p className='py-1'>Mail Id.</p>
                            <p className='py-1'>Affected Side</p>
                            <p className='py-1'>Condition</p>
                            <p className='py-1'>Speciality</p>
                        </div>
                    </div>
                    <div className='w-full flex py-1 justify-center items-center'>
                        <div className='w-2/3 flex flex-col'>
                            <div className='flex flex-row items-center py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="phone"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path></svg>
                                <p className='pl-2'>8022333445</p>
                            </div>
                            <div className='flex flex-row py-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="email"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                <p className='pl-2'>MeenaRabinSachin2@gmail.com</p>
                            </div>
                            <div className='flex flex-row py-1 items-center'>
                                <img className='w-4 h-4' src='https://cdn-icons-png.flaticon.com/128/3103/3103997.png' alt='bilateral'/>
                                <p className='pl-2'>Bilateral</p>
                            </div>
                            <div className='flex flex-row py-1'>
                                <img className='w-4 h-4' src="https://img.icons8.com/ios/50/knee-joint.png" alt="knee-joint"/>
                                <p className='pl-2'>Ortho</p>
                            </div>
                            <div className='flex flex-row py-1 items-center'>
                                <img className='w-4 h-4' src='https://www.svgrepo.com/show/81677/first-aid-box.svg' alt='first-aid-box'/>
                                <p className='pl-2'>Osteo Arthritis</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 flex items-center justify-center py-4 border-b shadow mb-8'>
                    <div className='w-full flex flex-row items-center justify-center'>
                        <div className='w-full flex items-center justify-center'>
                            <div className='flex w-4/5 flex-row'>
                                <img className='w-4 h-4' src='https://img.icons8.com/?size=128&id=VBQtwbyCq79r&format=png'/>
                                <p className='w-full pl-2 font-medium'>Medical History</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='w-9/12 flex items-center'>
                                <p>Hypertension, DM, Hyperthyrodism</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile