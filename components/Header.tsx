import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"

export const Header = () => {
  return (
    <header className="header">
      <div className="mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-4xl font-semibold">
          <h1>Hieu<span className="text-accent text-xs">.NET</span></h1>
        </Link>  
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
