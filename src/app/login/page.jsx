import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center  p-4">
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
        <h2 className="mb-4 text-2xl font-bold text-black">Login</h2>
        <div className="mb-4 w-full">
          <Input className="mb-2 w-full rounded-lg bg-white-200 text-black p-4 text-lg" placeholder="Email" type="email" />
          <Input className="w-full rounded-lg bg-white-200 p-4 text-black text-lg" placeholder="Password" type="password" />
        </div>
        <div className="mb-4 flex w-full items-center justify-between">
          
          <span className="mx-2 inline-block h-10 w-px bg-gray-300 TEXT"  ></span>
          <Button className="w-full rounded-lg bg-[#BA68C8] py-3 px-6 text-white hover:bg-[#AB47BC]">Login</Button>
        </div>

        <div className="mb-4 flex w-full items-center justify-between">
          
          <span className="mx-2 inline-block h-10 w-px bg-gray-300 TEXT"  ></span>
          <Link href="/sign" className="text-center w-full rounded-lg bg-[#050305] py-3 px-6 text-white hover:bg-[#AB47BC]">Register</Link>
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

export default Login;