import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generate from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMsg, setLiveMsg ] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: "Hi again! 🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="flex w-full h-[500px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => {
            return (
              <ChatMessage key={index} name={c.name} message={c.message} />
            );
          })}
        </div>
      </div>
      <form className="w-full h-10 p-2 ml-2 border border-black bg-slate-100 rounded-lg flex" onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Pallav Pushparaj",
                message: liveMsg,
              })
            );
            setLiveMsg('');
      }}>
        <input className="w-3/4" type="text" placeholder="Enter your message" value={liveMsg} onChange={(e) => {
            setLiveMsg(e.target.value);
        }}></input>
        <button className="w-1/4 px-2 mx-2 bg-green-500">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
