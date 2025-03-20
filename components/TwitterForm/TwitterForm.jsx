"use client";

import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function TwitterForm({ onTweet }) {
  const textAreaRef = useRef();

  function iconForm(icon) {
    return (
      <div>
        <FontAwesomeIcon
          icon={icon}
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          style={{ width: "16px", height: "16px" }}
        />
      </div>
    );
  }

  function HandleSubmit() {
    if (textAreaRef.current.value) {
      onTweet(textAreaRef.current.value);
      textAreaRef.current.value = "";
    }
  }

  return (
    <div className="border-gray-800">
      <textarea
        placeholder="What's happening"
        className="w-full bg-opacity-80 text-xl text-white resize-none outline-none px-4"
        ref={textAreaRef}
      />

      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
        <nav className="flex space-x-4 px-4">
          {iconForm(faImage)}
          {iconForm(faFilm)}
          {iconForm(faChartBar)}
          {iconForm(faSmile)}
          {iconForm(faCalendarAlt)}
          {iconForm(faMapMarkedAlt)}
        </nav>
        <button
          className="cursor-pointer bg-blue-500 text-xs font-bold px-3 py-2 mr-4 rounded-full hover:bg-blue-400 transition duration-200"
          onClick={HandleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
