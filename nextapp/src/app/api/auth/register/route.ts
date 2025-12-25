import { connectToDB } from "@/lib/connectDB";
import User from "@/models/Users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    console.log("Hi")
    try {
        await connectToDB(); 

        const {fullName , email , password} = await req.json();

        if (!fullName || !email || !password){
            return NextResponse.json({message:"All fields are required"},{status:400});
        }

        const existingUser = await User.findOne({email});

        if (existingUser){
            return NextResponse.json({message:"User already exist"},{status:400});
        }

        await User.create({fullName,email,password});
        return NextResponse.json({message:"User created successfully"},{status:201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Internal server error"},{status:500})
    }
}