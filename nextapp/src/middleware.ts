import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){
    
    const token = await getToken({req});
    const pathName = req.nextUrl.pathname;

    if (!token && pathName!=="/signup" && pathName!=="/login"){
        return NextResponse.redirect(new URL("/login",req.url))
    }

    if (token && (pathName === "/signup" || pathName === "/login")){
        return NextResponse.redirect(new URL("/home",req.url))
    }

}

export const config = {
    matcher:["/","/login","/signup","/home"]
}