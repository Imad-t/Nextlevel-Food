import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-bg";
export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground/>
    <header className={styles.header} >
        <Link href="/" className={styles.logo}>
        <Image
         src={logo} //{logo.src} when using standard img tag
         alt="a plate with food on it"
         priority
         />
        Next Level Food
        </Link>
        <nav className={styles.nav}>
        <ul>
            <li>
            <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
            <Link href="/community">Foodies Community</Link>
            </li>
        </ul>
        </nav>
    </header>
    </>
  )
}
