"use client"
import React from "react";



import Image from "next/image"



import { signIn, signOut, useSession } from "next-auth/react";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

const Header = () => {
  const {session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)

  
  return (
    <header>
        <div className="flex items-center bg-amazone_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                onClick={() => router.push("/")}

                    //src='https://links.papareact.com/f90'
                    //src="/images/service2.jpg"
                    src="/images/slack profilepic.png"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    alt="/images/slack profilepic.png"
                />
            </div>

            {/*search property in my header*/}
            <div className="hidden sm:flex cursor-pointer items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
                <input className="flex-grow rounded-l-md flex-shrink focus:outline-nine p-2 h-full " type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>

            {/* Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                    <p className="hover:underline">
                        {session ? `hello, ${session.user.name}` : "Sign In"}
                    </p>
                    <p className="font-extrabold md:text-sm">Account  Lists</p>
                </div>
                <div className="link">
                    <p className="font-extrabold md:text-sm">Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div 
                    onClick={() => router.push("/checkout")}
                    className="relative link flex items-center cursor-pointer "
                >
                    <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-black text-center font-bold rounded-full md:right-10">{items.length}</span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden md:inline md:text-sm mt-2 font-extrabold">Basket</p>
                </div>
            </div>
        </div>

        {/*bottom nav */}

        <div className="flex p-2 pl-6 space-x-3 items-center text-white text-sm bg-amazone_blue-light">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1" />
                All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Todays Best</p>
            <p className="link hidden lg:inline-flex">Health & personal care</p>
            <p className="link hidden lg:inline-flex">Literature Read</p>
            <p className="link hidden lg:inline-flex">Sports and game equipments</p>
            <p className="link hidden lg:inline-flex">Shopper toolkit</p>

        </div>
        {/*Amazone G Header*/}
    </header>
  )
}
export default Header