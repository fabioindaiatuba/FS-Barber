import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fabio</h2>
        <p>Segunda, 2 de Fevereiro</p>
        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Bann er */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende os melhores com FSW-Barber"
            src="/banner-01.png"
            fill
            className="bject-cover rounded-xl"
          />
        </div>

        {/* Agendamento */}
        <Card className="mt-6 py-0">
          <CardContent className="flex justify-between px-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/12553186?v=4" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
