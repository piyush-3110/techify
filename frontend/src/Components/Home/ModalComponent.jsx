import React from "react";

import { WhatsappIcon, WhatsappShareButton } from "react-share";
import { FaCross, FaTimes } from "react-icons/fa";
export function ModalComponent({ setOpen }) {
  return (
    <>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[20rem] z-2 w-[80%] bg-slate-300 rounded shadow-2xl ease-in-out duration-300">
        <button onClick={(prev) => setOpen(!prev)}>
          <FaTimes />
        </button>
      </div>
    </>
  );
}
