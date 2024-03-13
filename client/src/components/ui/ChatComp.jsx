import React, { useState } from 'react'
import plusicon from '../../assets/plus.png'

const ChatComp = () => {
    const [messages, setMessages] = useState(["fdf", "fjdhskdhf", "jfkjfkdj", "fdf", "fjdhskdhf", "jfkjfkdj", "fdf", "fjdhskdhf", "jfkjfkdj", "fdf", "fjdhskdhf", "jfkjfkdj"]);
    const [client, setClient] = useState(true);
    // let client;
    return (
        <div>
            <div className="bg-gray-500 h-[70vh] p-4 border border-solid rounded-lg overflow-auto flex flex-col ">

                {/* Chat Bubble */}
                {messages.map((parameter, index) => (<>
                    <div className={` flex flex-col items-${index % 2 === 0 ? 'end' : 'start'}`}>
                        <div className='font-bold'>{index % 2 === 0 ? "You" : "TravelAI"}</div>
                        <div className='bg-white rounded-xl p-3'>{parameter}</div>
                    </div>
                </>
                ))}
            </div>
        </div>
    )
}

export default ChatComp