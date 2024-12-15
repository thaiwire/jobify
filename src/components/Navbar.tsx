import { UserButton } from "@clerk/nextjs"
import LinkDropdown from "./LinkDropdown"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">

     <div>
     <LinkDropdown />
     </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </nav>
  )
}

export default Navbar