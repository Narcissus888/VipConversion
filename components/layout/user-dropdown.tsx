"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import person from "@/assets/person.png";

import {
  AlignJustify,
  LayoutDashboard,
  LogOut,
  ChevronsRightLeft,
} from "lucide-react";
import Popover from "@/components/shared/popover";
import Image from "next/image";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export default function UserDropdown({ session }: { session: any }) {
  const { email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <div className="p-2">
              {session?.user?.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  {session?.user?.name}
                </p>
              )}
              <p className="truncate text-sm text-gray-500">
                {session?.user?.email}
              </p>
            </div>
            <button
              className="relative flex w-full  items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => {
                // signOut()
                router.push("/level");
                setOpenPopover(false);
              }}
            >
              <AlignJustify className="h-4 w-4" />
              <p className="text-sm">Level</p>
            </button>
            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => {
                // signOut()
                router.push("/exchangeHistory");
                setOpenPopover(false);
              }}
            >
              <ChevronsRightLeft className="h-4 w-4" />

              <p className="text-sm">ExchangeHistory</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image alt={email} src={person} width={40} height={40} />
        </button>
      </Popover>
    </div>
  );
}
