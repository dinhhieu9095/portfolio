import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./MobileNav"
import AuthButtons from "./ButtonLogin"

export const Header = () => {
  return (
    <header className="header">
      <div className="mx-auto flex flex-row  justify-between items-center container">
        <Link href={"/"} className="xl:text-4xl text-2xl font-semibold">
          <h1 className="prefade">Hieu<span className="text-accent text-xs">.NET</span></h1>
        </Link>
        <div className="flex items-center flex-row  gap-8">
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
          <Link href={"/contact"} className="prefade">
            <AuthButtons />
          </Link>
        </div>
      </div>
    </header>
  )
}
