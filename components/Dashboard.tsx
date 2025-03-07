"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={session.user?.image as string}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />

            <p>{session.user?.email}</p>
          </div>
          <p className="text-green-600">
            Welcome back <strong>{session.user?.name}!</strong>
          </p>
          <p className="text-justify text-green-500"> {JSON.stringify(session)}</p>
          <button
            onClick={() => signOut({callbackUrl:`/`})}
            className="bg-slate-700 p-3 text-white rounded cursor-pointer hover:bg-slate-900"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-red-400">
            You are not logged in
          </h1>
          <button
            onClick={() => signIn("google")}
            className="bg-blue-700 p-3 text-white rounded cursor-pointer hover:bg-blue-900"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-slate-700 p-3 text-white rounded cursor-pointer hover:bg-slate-900"
          >
            Sign in with Github
          </button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
