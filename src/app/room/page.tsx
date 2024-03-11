'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function generateThreeDigitNumber(): number {
    // Generate a number between 0 (inclusive) and 1 (exclusive),
    // multiply it by 900 to get a range of 0 to 899,
    // add 100 to shift the range to 100 to 999,
    // and use Math.floor to remove any decimal places.
    return Math.floor(Math.random() * 900 + 100);
  }

const Page = () => {
    const [username, setUsername] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const router = useRouter();

    return(
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
  <div className="flex flex-col items-center">
    <input
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      placeholder="Enter username"
      type="text"
      value={username}
      onChange={e => setUsername(e?.target?.value)}
    />
  </div>

  <div>
    <button
      className={`px-4 py-2 rounded-md text-white font-bold ${!Boolean(username) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
      disabled={!Boolean(username)}
      onClick={() => {router.push(`/room/${generateThreeDigitNumber()}?username=${username}`)}}>
      Create a new room
    </button>
  </div>

  <div className="text-center text-gray-500 my-2">
    OR
  </div>

  <div className="flex flex-col items-center">
    <input
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      type="text"
      value={room}
      onChange={e => setRoom(e?.target?.value)}
    />

    <button
      className={`mt-2 px-4 py-2 rounded-md text-white font-bold ${!Boolean(room) || !Boolean(username) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`}
      disabled={!Boolean(room) || !Boolean(username)}
      onClick={() => {router.push(`/join/${generateThreeDigitNumber()}?username=${username}`)}}>
      Join this room
    </button>
  </div>
</div>

        
    )
};

export default Page;