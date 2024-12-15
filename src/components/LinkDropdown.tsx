import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignLeft } from "lucide-react"
import { Button } from "./ui/button"
import links from '@/utils/links'
import Link from 'next/link'

import React from 'react'

function LinkDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button value='outline' size='icon'>
          <AlignLeft size={24} />
          <span
            className="sr-only"
          >
            Tooggle Links
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='-52 lg:hidden' align="start" sideOffset={25}>
        {links.map((link) => {
          return <DropdownMenuItem key={link.href}>
            <Link href={link.href}
              className="flex items-center space-x-2">
              {link.icon}
              <span>
                {link.label}
              </span>


            </Link>
          </DropdownMenuItem>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown