import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 w-full h-[600px] p-2 border border-gray-500 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            /* Disclamer : dont use indexes as key  */
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full flex p-2 ml-2 mt-2 gap-2 border border-black rounded"
        onSubmit={(e) => {
          console.log("form", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kanti",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          className="border border-gray-800 rounded w-72 h-10 p-2"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="p-2 bg-black text-white rounded-md "
          onClick={() => {}}
        >
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
