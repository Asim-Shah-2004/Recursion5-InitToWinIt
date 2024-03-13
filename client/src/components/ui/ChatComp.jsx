import React from 'react'
import plusicon from '../../assets/plus.png'

const ChatComp = () => {
  return (
    <div>
        <div className="bg-gray-500 h-[70vh] p-4 border border-solid rounded-lg overflow-auto">
                            
                            {/* Chat Bubble */}
                            <div className='bg-white grid grid-cols-10 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-8'>
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-10'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-8'>
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>
                            <div className='bg-white grid grid-cols-10 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-8'>
                                    Lorem fjkdjflkdjlks fkdjs fkjldskjfl
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-10'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-8 *:'>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>
                            <div className='bg-white grid grid-cols-12 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-10'>
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-12'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-10'>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>

                            

                        </div>
    </div>
  )
}

export default ChatComp