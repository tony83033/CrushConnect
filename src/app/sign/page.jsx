"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useContext , useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import appwriteAuth from '@/helpers/appwriteAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from '@/context/appContext'
const Sign = () => {
    useEffect(() => {
      if(user){
        router.push("/");
      }
    }, [])
    
    const router = useRouter()
    const context = useContext(AppContext);
    const {user} = context;
    const [crediential, setCrediential] = useState({ email: "", password: "", name: "" });
    const onChangeHandler = (e) => {
        e.preventDefault();
        setCrediential({ ...crediential, [e.target.name]: [e.target.value] });
        //   console.log(crediential.name.toString())
        //   console.log(crediential.email.toString());
        //   console.log(crediential.password.toString())
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        console.log("click in onHanldeSubmit");
        const response = await appwriteAuth.createNewUser(crediential.email.toString(), crediential.password.toString(), crediential.name.toString());
        console.log(response)
        if(response.success==false){
           
            const message = response.error.toString().replace("AppwriteException:", "");
            toast(`${message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
                });
        }else{
            toast(`Sign up successfully please go to Login page`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
                });

                setTimeout(()=>{
                    router.push("/login");
                },2000)
        }
    }
    return (
        <div className="flex h-screen w-full items-center justify-center  p-4">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            //transition: Bounce,
            />
            {/* Same as */}
            <ToastContainer />
            <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-[#BA68C8] p-4">
                    <img
                        alt="Cute dog"
                        height="200"
                        src="/love.svg"
                        style={{
                            aspectRatio: "128/128",
                            objectFit: "cover",
                        }}
                        width="200"
                    />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-black">Register</h2>
                <div className="mb-4 w-full">
                    <Input value={crediential.name} name="name" onChange={onChangeHandler} className="mb-2 w-full rounded-lg bg-white-200 text-black p-4 text-lg" placeholder="Full Name" type="text" />

                    <Input value={crediential.email} name="email" onChange={onChangeHandler} className="mb-2 w-full rounded-lg bg-white-200 text-black p-4 text-lg" placeholder="Email" type="email" />
                    <Input value={crediential.password} name="password" onChange={onChangeHandler} className="w-full rounded-lg bg-white-200 p-4 text-black text-lg" placeholder="Password" type="password" />
                </div>


                <div className="mb-4 flex w-full items-center justify-between">

                    <span className="mx-2 inline-block h-10 w-px bg-gray-300 TEXT"  ></span>
                    <Button onClick={onHandleSubmit} className="w-full rounded-lg   bg-[#BA68C8]  py-3 px-6 text-white hover:bg-[#AB47BC]">Register</Button>
                </div>


                <div className="mb-4 flex w-full items-center justify-between">

                    <span className="mx-2 inline-block h-10 w-px bg-gray-300 TEXT"  ></span>
                    <Link href="/login" className=" text-center w-full rounded-lg bg-[#050305] py-3 px-6 text-white hover:bg-[#AB47BC]">Login</Link>
                </div>
                <div className="mt-4 flex w-full items-center justify-center">
                    <div className="rounded-md bg-gray-100 p-4 text-sm text-gray-500">
                        {/* Localhost is not in the list of supported domains for this site key. */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sign;