import React, { useEffect, useRef } from 'react';
import AudioPlayer from './AudioPlayer';

const ChatComp = ({ messages }) => {
    const chatEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="h-[70vh] p-4 rounded-lg overflow-auto flex flex-col">
            {/* Chat Bubble */}
            {messages.map((parameter, index) => (
                <div key={index} className={`flex flex-col my-6 items-${index % 2 === 0 ? 'end' : 'start'} ${index % 2 === 0 ? 'ml-64' : 'max-w-[400px]'}`}>
                    <div className='font-bold text-xl mx-12 text-white'>{index % 2 === 0 ? "You" : "TravelAI"}</div>
                    <div className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                        <div className={`${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-800 text-slate-300'} rounded-xl p-3 mx-2`}>{parameter}</div>
                        <div>
                            {index % 2 === 0 ? (
                                <div className={`bg-[#FC6736] w-10 h-10 rounded-[50%] p-3 flex justify-center font-bold uppercase`}>
                                    {localStorage.getItem("username")[0]}
                                </div>
                            ) : (
                                <div className='flex flex-col space-y-2'>
                                    <div className={`bg-[#FC6736] w-10 h-10 rounded-[50%] p-3 flex justify-center font-bold uppercase`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-message-square">
                                            <path d="M12 6V2H8" />
                                            <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                                            <path d="M2 12h2" />
                                            <path d="M9 11v2" />
                                            <path d="M15 11v2" />
                                            <path d="M20 12h2" />
                                        </svg>
                                    </div>
                                    <div className={`bg-[#FC6736] w-10 h-10 rounded-[50%] p-3 flex justify-center font-bold uppercase`}>
                                        <AudioPlayer paragraph={parameter} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div ref={chatEndRef} />
        </div>
    );
};

export default ChatComp;
