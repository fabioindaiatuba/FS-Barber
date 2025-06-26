import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"

const Sidebar = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="px-5">
        <div className="flex items-center justify-between gap-3 border-b border-solid pb-5">
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
              <Button variant="outline" className="gap-1 font-bold">
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
          {/* AVATAR 
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/12553186?v=4" />
          </Avatar>
          <div>
            <p className="font-bold">Fabio Gonçalves</p>
            <p className="text-xs">fabioindaiatuba@outlook.com</p>
          </div>
          */}
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
          <Button variant="ghost" className="justify-start">
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </div>
    </SheetContent>
  )
}

export default Sidebar
