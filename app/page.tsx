import { SearchIcon } from "lucide-react"
import Image from "next/image"
import BarbershopItem from "./_components/babershop-itm"
import BookingItem from "./_components/booking-item"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { quickSearchOptions } from "./_constants/search"
import { db } from "./_lib/prisma"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

        {/* Busca Rapida */}
        <div className="mt-6 flex items-center gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende os melhores com FSW-Barber"
            src="/banner-01.png"
            fill
            className="bject-cover rounded-xl"
          />
        </div>

        {/* Agendamento */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Populares */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <footer>
          <Card className="p-0">
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © 2023 Copyright <span className="font-bold">FS Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  )
}
