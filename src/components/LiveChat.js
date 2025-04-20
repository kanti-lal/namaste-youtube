import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // api polling
      console.log("api pooing");
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 w-full h-[600px] p-2 border border-gray-500 bg-slate-100 rounded-lg">
      <ChatMessage name="Kantilal" message="This is Namaste Youtube project " />
    </div>
  );
};

export default LiveChat;
