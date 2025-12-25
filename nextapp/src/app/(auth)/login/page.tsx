"use client"

import Link from 'next/link'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const [showPassword , setShowPassword] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(false);
    const router = useRouter();

    const [formData , setFormData] = useState({
        email:"",
        password:"",
    })

    const handleLogin = async () =>{

        setLoading(true);
        try {
            const responce = await signIn("credentials",{
                email:formData.email,
                password:formData.password,
                redirect:false,
                callbackUrl:"/"
            });

            if (!responce?.ok){
                setLoading(false);
                return toast.error(responce?.error)
            }

            toast.success("Login successfully")
            router.replace("/")


        } catch (error) {
            console.log(error)
        }

        setLoading(false);
    }

    const onSubmit = () =>{
        handleLogin();
    }


    return (
        <div className='flex flex-col min-h-screen w-screen py-10 px-4 items-center justify-center'>

            <div className='w-130 min-h-100 flex flex-col items-center dark:bg-[#0e0d0d] bg-[#fbfbfb] py-6 px-6 space-y-4'>
                {/* Logo */}

                <div className='bg-foreground/10 size-14 rounded-lg items-center justify-center flex'>
                    <div className='size-8 rounded-full bg-purple-500'></div>
                    <div className='size-8 rounded-full bg-purple-500/60 -ml-4'></div>

                </div>


                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-4xl font-bold '>Welcome Back</h1>
                    <p className='text-xs text-foreground/80'>Don't have an account? <Link href={"/signup"} className='font-bold hover:underline text-foreground'>Signup</Link></p>
                </div>


                {/* Input field  */}

                <div className='w-full mt-10'>
                    <FieldSet>
                        <FieldGroup>
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
                        </FieldGroup>
                        <Button 
                                className={`font-semibold text-lg cursor-pointer disabled:opacity-75`} 
                                onClick={onSubmit}
                                disabled={loading}
                            >
                                {loading?<LoaderCircle className='animate-spin' />:"Login"}
                            </Button>
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
                        <p className='font-semibold text-sm'>Signin with Google </p>

                    </div>

                    <div className='flex gap-3 items-center justify-center flex-1 py-3 border px-2 rounded cursor-pointer'>
                        <img src="/github.svg" className='size-5' alt="" />
                        <p className='font-semibold text-sm'>Signin with Github </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LoginPage