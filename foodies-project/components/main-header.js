import Link from "next/link";
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logoImg} alt="A plate with food in it." priority></Image>
        NextLevel Food
      </Link>

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