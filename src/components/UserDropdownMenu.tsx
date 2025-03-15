"use client"

import React from "react"
import { HiOutlineUserCircle } from "react-icons/hi2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar } from "@radix-ui/react-avatar";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import { useModalStore } from "@/store/modal-store";

export function UserDropdownMenu() {
  const clearUser = useUserStore((state) => state.clearUser)
  const user = useUserStore((state) => state.user)
  const openLoginModal = useModalStore((state) => state.openLoginModal)
  const openSignupModal = useModalStore((state) => state.openSignupModal)

  const logoutHandler = async() => {
    clearUser()
    toast.success("Logout success")
    //logout logic
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <HiOutlineUserCircle size={22}/>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {
        user?
          <>
            <DropdownMenuItem className="py-2">My Orders</DropdownMenuItem>
            <DropdownMenuItem className="py-2">Account</DropdownMenuItem>
            <DropdownMenuItem className="py-2" onClick={logoutHandler}>Logout</DropdownMenuItem>
          </>
        :
          <>
            <DropdownMenuItem className="py-2" onClick={openLoginModal}>Login</DropdownMenuItem>
            <DropdownMenuItem className="py-2" onClick={openSignupModal}>Signup</DropdownMenuItem>
          </>
      }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
