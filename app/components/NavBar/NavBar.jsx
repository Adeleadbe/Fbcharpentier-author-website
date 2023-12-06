"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { menuSlide, linkSlide } from "./anim"
import useIconClickState from "./use-icon-click-state"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {
    const [isIconClicked, handleIconClicked] = useIconClickState(false)

    const links = [
        { href: "/", text: "Accueil", delay: 0.05 },
        { href: "/book", text: "Livre", delay: 0.1 },
        { href: "/about", text: "L'autrice", delay: 0.15 },
        { href: "/contact", text: "Contact", delay: 0.25 },
    ]
    return (
        <header className={styles.header}>
            <div className={styles.header_author_name}>
                <Link href="/">F.B CHARPENTIER</Link>
            </div>
            <nav>
                <AnimatePresence>
                    {isIconClicked && (
                        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
                            <div className={styles.menu_title}>Navigation</div>
                            {links.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <motion.div variants={linkSlide} initial="initial" animate="enter" exit="exit" className={styles.header_link} custom={link.delay}>
                                        {link.text}
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <div className={styles.header_burgerMenu} onClick={handleIconClicked}>
                <FontAwesomeIcon icon={isIconClicked ? faTimes : faBars} size="lg" />
            </div>
        </header>
    )
}
