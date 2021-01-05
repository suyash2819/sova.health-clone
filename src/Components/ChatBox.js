import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../Css/ChatBox.css";

const ChatBox = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  return showChatBox ? (
    <div className="chatwindow">
      <button
        class="eVpfA _37NKB"
        data-hook="collapse-button"
        aria-label="Minimize Chat"
        style={{ float: "right", backgroundColor: "#1E2C4C" }}
        className="closebutton"
        onClick={() => setShowChatBox(false)}
      >
        <svg
          viewBox="-2.4 21.6 9.7 9.7"
          fill="currentColor"
          width="12px"
          height="12px"
          class="collapseAsCross"
        >
          <path
            d="M7.3 22.4l-.7-.8-4.1 4.2-4.1-4.2-.8.8 4.2 4.1-4.2 4.1.8.7 4.1-4.1 4.1 4.1.7-.7-4.1-4.1z"
            fill="currentColor"
            class="st0"
          ></path>
        </svg>
      </button>
      <br />
      <br />

      <center>
        <svg
          viewBox="0 0 60 60"
          fill="currentColor"
          width="1em"
          height="1em"
          style={{
            color: "rgb(48, 182, 115)",
            border: "1px solid rgb(48, 182, 115)",
            borderRadius: "50%",
            height: "25%",
            width: "25%",
          }}
        >
          <g id="Layer_2">
            <path
              d="M0,0V60H60V0ZM40.37,47A19.15,19.15,0,0,1,13.9,41.23l-.06-.09a1,1,0,0,1,1.74-1,17.15,17.15,0,0,0,28.85,0l.06-.09a1,1,0,0,1,1.62,1.17A19.15,19.15,0,0,1,40.37,47Zm-19.53-19a3.58,3.58,0,0,0-3.58,3.58,1,1,0,0,1-2,0,5.58,5.58,0,1,1,11.16,0,1,1,0,0,1-2,0h0A3.58,3.58,0,0,0,20.84,27.95Zm18.32,0a3.58,3.58,0,0,0-3.58,3.58,1,1,0,0,1-2,0,5.58,5.58,0,1,1,11.16,0,1,1,0,0,1-2,0h0A3.58,3.58,0,0,0,39.16,27.95Z"
              id="Layer_1-2"
            ></path>
          </g>
        </svg>
        <br />
        <br />
        <p>Welcome to Sova Health</p>
        <p>How can I help you? </p>
        <p>We'll reply within a few minutes</p>
        <br />
        <div className="chattingarea"></div>
      </center>
      <div className="chats">
        <Form>
          <Form.Group controlId="formBasicText" className="chatinput">
            <Form.Control
              type="text"
              placeholder="Type your message... "
              className="message"
            />
          </Form.Group>
          <span>
            <button
              type="submit"
              className="submitmessage"
              onClick={(e) => e.preventDefault()}
            >
              send
            </button>
          </span>
        </Form>
      </div>
    </div>
  ) : (
    <div className="chatbox">
      <button className="chatbutton" onClick={() => setShowChatBox(true)}>
        <svg
          viewBox="0 0 23 23.36"
          fill="currentColor"
          width="26px"
          height="26px"
          style={{ color: "rgb(48, 182, 115)" }}
        >
          <g id="Layer_2">
            <path
              d="M22.81,9.41a11.49,11.49,0,1,0-7.47,12.93.47.47,0,0,1,.3,0l3.05,1a1,1,0,0,0,1.3-1V19.42a.48.48,0,0,1,.13-.32,11.63,11.63,0,0,0,1.3-1.79A11.47,11.47,0,0,0,22.81,9.41ZM7.5,12.5a1,1,0,1,1,1-1A1,1,0,0,1,7.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,11.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,15.5,12.5Z"
              id="Layer_1-2"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ChatBox;
