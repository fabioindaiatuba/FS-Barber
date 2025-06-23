import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"

const Sidebar = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="px-5">
        <div className="flex items-center gap-3 border-b border-solid pb-5">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/12553186?v=4" />
          </Avatar>
          <div>
            <p className="font-bold">Fabio Gonçalves</p>
            <p className="text-xs">fabioindaiatuba@outlook.com</p>
          </div>
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
