// src/app/(main)/layout.tsx
import React from 'react'
import { getServerSession } from "next-auth";
import { connectToDB } from "@/lib/connectDB";
import User from "@/models/Users";
import AuthInitializer from "@/components/AuthInitializer";
import MainLayoutShell from "./_components/MainLayoutShell";
import { authOptions } from '../api/auth/[...nextauth]/option';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  // 1. Fetch data from DB on the Server
  const session = await getServerSession(authOptions);
  console.log("SESSION IN LAYOUT:", session);
  let fullUserData = null;
  

  if (session?.user?.id) {
    await connectToDB();
    fullUserData = await User.findById(session.user.id).select("-password").lean();
    
    if (fullUserData) {
      fullUserData._id = fullUserData._id.toString();
    }
  }
  
  console.log(fullUserData)

  return (
    <>
      {/* 2. Hydrate Zustand store */}
      <AuthInitializer userData={fullUserData} />
      
      {/* 3. Render the interactive UI shell */}
      <MainLayoutShell>
        {children}
      </MainLayoutShell>
    </>
  )
}

export default MainLayout