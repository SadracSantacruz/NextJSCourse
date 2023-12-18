// NextJS packages
import Link from "next/link";
import Image from "next/image";

// Images
import logoImg from "@/assets/logo.png";

// Style File
import style from "./main-header.module.css";

// This header will be the deafault header that we will be inputing into our layout for the rest of the website
export default function MainHeader() {
  return (
    // Create a header element that contains the navbar and other stuff
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logoImg} alt="A plate with food in it." priority></Image>
        NextLevel Food
      </Link>

      {/* This is the Navbar, that contains some links that will allow mobility in the website*/}
      <nav className={style.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
