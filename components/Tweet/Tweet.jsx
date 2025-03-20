"use client";

import {
  faChartBar,
  faComment,
  faEllipsisH,
  faHeart,
  faRetweet,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Tweet({ tweet }) {
  const [comments, setComments] = useState(0);
  const [like, setLike] = useState(0);
  const [retweet, setRetweet] = useState(0);

  function handleAction(action) {
    switch (action) {
      case "like":
        setLike((like) => like + 1);
        break;
      case "retweet":
        setRetweet((retweet) => retweet + 1);
        break;
      default:
        setComments((comments) => comments + 1);
        break;
    }
  }

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition duration-300">
      <div className="flex space-x-3">
        <img
          src={tweet.avatar}
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold"> {tweet.name} </span>
              <span className="text-gray-500 ml-2">@{tweet.username}</span>
              <span className="text-gray-500 ml-2">{tweet.time}</span>
            </div>
            <FontAwesomeIcon
              icon={faEllipsisH}
              style={{ width: "20px", height: "20px" }}
              className="text-gray-500"
            />
          </div>
          <p className="mt-2"> {tweet.content} </p>
          {tweet.image ? (
            <img
              src={tweet.image}
              className="rounded-2xl mt-3 max-w-full h-auto"
            />
          ) : (
            ""
          )}

          <div className="flex justify-between mt-4 text-gray-500">
            <div className="cursor-pointer flex items-center hover:text-blue-500">
              <FontAwesomeIcon
                icon={faComment}
                onClick={() => handleAction("comment")}
              />
              <span className="ml-2">{comments}</span>
            </div>

            <div className="cursor-pointer flex items-center hover:text-green-500">
              <FontAwesomeIcon
                icon={faRetweet}
                onClick={() => handleAction("retweet")}
              />
              <span className="ml-2">{retweet}</span>
            </div>

            <div className="cursor-pointer flex items-center hover:text-red-500">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleAction("like")}
              />
              <span className="ml-2">{like}</span>
            </div>

            <div className="cursor-pointer flex items-center hover:text-blue-400">
              <FontAwesomeIcon icon={faChartBar} />
              <span className="ml-2">0</span>
            </div>

            <div className="cursor-pointer flex items-center hover:to-blue-500">
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
