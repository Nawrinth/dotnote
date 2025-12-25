"use client"

import Link from 'next/link'
import { Field , FieldGroup , FieldLabel , FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import axios from "axios";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const SignupPage = () => {
    const [showPassword , setShowPassword] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(false);

    const [formData , setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
    })

    const router = useRouter();

    const handleLogin = async () =>{
        try {
            const responce = await signIn("credentials",{
                email:formData.email,
                password:formData.password,
                redirect:false,
                callbackUrl:"/"
            });

            if (!responce?.ok){
                return toast.error(responce?.error)
            }

            router.replace("/")


        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit=async ()=>{
        if (!formData.fullName || !formData.email || !formData.password){
            
            return toast.error("All fields are required")
        }

        setLoading(true);
        
        try {
            const res = await axios.post("api/auth/register",formData)
            if (res){
                toast.success(res.data.message)
            }
            handleLogin();
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false);
        }

        console.log(formData)
    }


    return (
        <div className='flex flex-col min-h-screen w-screen py-10 px-4 items-center justify-center'>

            <div className='max-w-full w-130 min-h-100 flex flex-col items-center dark:bg-[#0e0d0d] bg-[#fbfbfb] py-6 px-6 space-y-4'>
                {/* Logo */}

                <div className='bg-foreground/10 size-14 rounded-lg items-center justify-center flex'>
                    <div className='size-8 rounded-full bg-purple-500'></div>
                    <div className='size-8 rounded-full bg-purple-500/60 -ml-4'></div>

                </div>


                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-4xl font-bold '>Create an Account</h1>
                    <p className='text-xs text-foreground/80'>Already have an account? <Link href={"/login"} className='font-bold hover:underline text-foreground'>Login</Link></p>
                </div>


                {/* Input field  */}

                <div className='w-full mt-10'>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                                <Input id="fullName" type="text" placeholder="Ryan Noah" value={formData?.fullName}
                                    onChange={(e)=>{setFormData(prev => ({...prev , fullName:e.target.value}))}}/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="text" placeholder="someone@example.com" value={formData?.email}
                                    onChange={(e)=>{setFormData(prev => ({...prev , email:e.target.value}))}}/>
                            </Field>
                            <Field >
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <div className='relative'> 
                                    <Input className='relative pr-10' id="password" type={showPassword?"text":"password"} placeholder="••••••••" value={formData?.password}
                                    onChange={(e)=>{setFormData(prev => ({...prev , password:e.target.value.trim()}))}}
                                    />
                                    <Button className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent opacity-80 hover:bg-transparent text-foreground cursor-pointer' onClick={()=>{setShowPassword(!showPassword)}}>
                                        {showPassword?<EyeOff/>:<Eye/>}
                                    </Button>
                                </div>
                            </Field>
                            <Button 
                                className={`font-semibold text-lg cursor-pointer disabled:opacity-75`} 
                                onClick={onSubmit}
                                disabled={loading}
                            >
                                {loading?<LoaderCircle className='animate-spin' />:"Signup"}
                            </Button>
                        </FieldGroup>
                        
                    </FieldSet>
                </div>

                <div className='w-full flex items-center justify-center my-10 relative'>
                    <div className='w-[80%] border'>
                    </div>
                    <div className='absolute  dark:bg-[#0e0d0d] bg-[#fbfbfb] text-sm font-semibold px-2'>or</div>
                </div>

                <div className='flex w-full gap-2'>
                    <div className='flex gap-3 items-center justify-center flex-1 py-3 border px-2 rounded cursor-pointer'>
                        <img src="/google.svg" className='size-5' alt="" />
                        <p className='font-semibold text-sm'>Signup with Google </p>

                    </div>

                    <div className='flex gap-3 items-center justify-center flex-1 py-3 border px-2 rounded cursor-pointer'>
                        <img src="/github.svg" className='size-5' alt="" />
                        <p className='font-semibold text-sm'>Signup with Github </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignupPage