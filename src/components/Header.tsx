import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image src="vercel.svg" width="30" height="30"></Image></Link></div>
            <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/upload">About</Link>
          </div>
          </nav>
          
        </header>
  )
}

