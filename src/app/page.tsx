import { Header } from "@/components/header"
import { BrickBreakerGame } from "@/components/brick-breaker-game"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        {/* Brick Breaker Game */}
        <div className="absolute inset-0 bg-black">
          <BrickBreakerGame />
        </div>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Skillvita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
