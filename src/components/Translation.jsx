import React from "react";

export default function Translation({ doStuff, setInput, result,input}) {
  return (
    <div className="trns-container">
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Questions Here..."
        required
     ></textarea>
     <div className="btn-div">
        <button className="action-btn" onClick={doStuff}>
          Ask Now!
          </button>
          <a href="/" className="cancel-btn">
          <button className="action-btn">
          Cancel
          </button>
          </a>
          
     </div>
      
    {result?(<>
      <h3 className="result-text"><img src="/images/user-icon.png" alt="msg-icon" className="chat-gpt-icon" />  {input}</h3>
      <h3 className="result-text"><img src="/images/gpt-icon.jpg" alt="gpt-icon" className="chat-gpt-icon" /> {result.length > 0 ? result :'Not Found !...'}</h3></>):""}
      
    </div>
  );
}
