'use client'

import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import Container from "../../components/Container";
import { Player } from "../../types";

const Page = () => {
    const searchParams = useParams();
    const queryParams = useSearchParams();
    const username = queryParams.get('username');

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <div className="text-lg font-bold text-center">
                Welcome to room: <span className="text-blue-500">{searchParams.id}</span> created by <span className="text-green-500">{username}</span>
            </div>

            <div className="text-md text-gray-700 text-center">
                Share this room ID with your friend to start playing now
            </div>

            <Container player={Player.p1} />
            </div>
        </>
    )
}

export default Page;