import React from 'react'
import { Button } from "@/components/ui/button"
const Landing = () => {
  return (
    <>
   <div className="px-10 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-4">Dating season</h2>
          <p className="text-4xl font-bold mb-8">Try your luck</p>
          <p className="mb-6 font-bold text-1xl">
            Do you like someone, but are too shy to confess it? Or do you have multiple crushes and want to try your
            luck with all of them? Or do you want to know how popular you are? Crush Connect has a solution for you.
          </p>
          <p className="mb-6 font-bold text-1xl">
            You select your crush (or crushes, we don't judge you 😊) and hope that your crush selects you as well. If
            your crush selects you as well, when the clock strikes midnight on the day of Valentine's, we'll reveal it
            to the both of you that you like each other. If it's sadly a one sided affair, it'll be a secret and no one
            will know except you.
          </p>
          <div className="flex justify-center space-x-4">
          <Button className="bg-white font-bold text-[#9b30ff] hover:bg-gray-100">Sign Up</Button>
          <Button className="bg-white font-bold text-[#9b30ff] hover:bg-gray-100">Log In</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing