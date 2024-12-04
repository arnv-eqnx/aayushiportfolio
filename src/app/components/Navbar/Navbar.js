import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="w-full h-[10vh] px-16 fixed text-xl top-0 left-0 text-white flex items-center justify-between z-10">
          <Link href="/">
            <p className="text-blue-300 cursor-pointer">Aayushi Jha</p>
          </Link>
          <ul className="flex gap-4">
            <li className="cursor-pointer">
              <Link href="/#aboutme">About Me</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="./projects">Projects</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#contactfooter">Contact</Link>
            </li>
            <li className="cursor-pointer">
              <a className="text-blue-300">Resume</a>
            </li>
          </ul>
        </nav>
    );
}