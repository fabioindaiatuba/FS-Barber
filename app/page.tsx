import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Fabio</h2>
        <p>Segunda, 2 de Fevereiro</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative h-[150px] w-full">
          <Image
            alt="Agende os melhores com FSW-Barber"
            src="/banner-01.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
