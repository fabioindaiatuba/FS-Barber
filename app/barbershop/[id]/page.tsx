import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import Sidebar from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: Promise<{ id: string }>
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const { id } = await params // aguarde a promise!
  const barbershop = await db.barbershop.findUnique({
    where: {
      id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* IMAGE */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl || ""}
          fill
          className="object-cover"
          alt={barbershop?.name || ""}
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </div>

      {/* DADOS */}
      <div className="border-b border-solid p-5">
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primar y fill-primary" size={18} />
          <p className="text-sm">5,0 (499 Avaliações)</p>
        </div>
      </div>

      {/* DESCRICAO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-sm font-bold text-gray-600 uppercase">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVICOS */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-sm font-bold text-gray-600 uppercase">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="space-y-3 p-5">
        <h2 className="text-sm font-bold text-gray-600 uppercase">Contato</h2>
        {barbershop.phones.map((phone, index) => (
          <PhoneItem phone={phone} key={`${phone}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
