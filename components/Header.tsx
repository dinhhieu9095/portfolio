import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"

export const Header = () => {
  return (
    <header className="header">
      <div className="mx-auto flex justify-between items-center container">
        <Link href={"/"} className="text-4xl font-semibold">
          <h1>Hieu<span className="text-accent text-xs">.NET</span></h1>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
          <Link href={"/contact"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
