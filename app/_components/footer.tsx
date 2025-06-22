import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-6 p-0">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">FS Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
