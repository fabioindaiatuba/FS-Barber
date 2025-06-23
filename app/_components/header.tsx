import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
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
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
