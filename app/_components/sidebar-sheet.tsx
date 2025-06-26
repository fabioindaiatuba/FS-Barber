"use client"

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"

const Sidebar = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  const handleLoginOutClick = async () => {
    await signOut()
  }

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="px-5">
        <div className="flex items-center justify-between gap-3 border-b border-solid pb-5">
          {/* AVATAR */}
          {data?.user ? (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={data?.user?.image || ""} />
              </Avatar>
              <div>
                <p className="font-bold">{data?.user?.name}</p>
                <p className="text-xs">{data?.user?.email}</p>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon">
                    <LogInIcon />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[70%]">
                  <DialogHeader>
                    <DialogTitle>Faça login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta no Google.
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    variant="outline"
                    className="gap-1 font-bold"
                    onClick={handleLoginWithGoogleClick}
                  >
                    <Image
                      src="/google.svg"
                      width={18}
                      height={18}
                      alt="Fazer login com Google"
                    />
                    Google
                  </Button>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-col gap-4 border-b border-solid px-1 pb-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamento
          </Button>
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-col gap-4 border-b border-solid pb-5">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant="ghost"
            >
              <Image
                src={option.imageUrl}
                height={18}
                width={18}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-col px-1">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={handleLoginOutClick}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}

export default Sidebar
