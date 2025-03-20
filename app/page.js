"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import Tweet from "@/components/Tweet/Tweet";
import TwitterForm from "@/components/TwitterForm/TwitterForm";
import { getAvatar, getRandomImage } from "@/utils/generateImages";
import { v4 } from "uuid";
import { useState, useEffect } from "react";

export default function Home() {
  const [tweets, setTweets] = useState([]);

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)} `,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com `),
      content,
      time: new Date().toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl ">
        <header className="sticky top-0 z-10 bg-opacity-80 backdrop-blur-sm twitter-background">
          <h2 className="px-4 py-3 font-bold text-xl">For You</h2>
        </header>

        <TwitterForm
          onTweet={(content) => addNewTweet(content, Math.random() > 0.5)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
    </div>
  );
}
