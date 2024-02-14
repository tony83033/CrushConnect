
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-4xl rounded-lg mx-auto p-4 bg-gray-900 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
        <div className="flex flex-col items-center md:items-start md:space-y-4">
          <Avatar className="h-16 w-16">
            <AvatarImage alt="Profile picture" src="/profile.gif?height=150&width=150" />
          </Avatar>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold">sumitelite</h1>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-3 py-2">
                <span></span>
                <span>
              <Button className="bg-purple-600 text-white" variant="default">
                Edit profile
              </Button>
              </span>
              <span>
              <Button className="bg-gray-200" variant="secondary">
                View archive
              </Button>
              </span>
              <span>
              <Button className="bg-gray-200" variant="secondary">
                Ad tools
              </Button>
              </span>
              {/* <SettingsIcon className="text-gray-500" /> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 py-2">
            {/* <span>
              <strong>12</strong> posts
            </span>
            <span>
              <strong>217</strong> followers
            </span>
            <span>
              <strong>201</strong> following
            </span> */}
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div>
            <p>
              <strong>Sumit pal</strong>
            </p>
            <p>Entrepreneur</p>
            <p>Programmer</p>
            <p>Hacker</p>
            <p>OTAKU</p>
            <a className="text-blue-500" href="#">
              hackerstower.in
            </a>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              113 accounts reached in the last 30 days.{" "}
              <a className="text-blue-500" href="#">
                View insights
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-4" />
    </div>
  )
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
