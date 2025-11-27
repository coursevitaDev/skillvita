import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Image
            src="/skillvita.svg"
            alt="Skillvita Logo"
            width={200}
            height={50}
            priority
            className="py-2"
          />
        </div>
      </div>
    </header>
  )
}
