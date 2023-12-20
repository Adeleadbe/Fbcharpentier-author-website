"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { menuSlide, linkSlide } from "./anim"
import useIconClickState from "./use-icon-click-state"
import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {
    const [isIconClicked, handleIconClicked] = useIconClickState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        // Ajouter un écouteur d'événements pour suivre les changements de taille de la fenêtre
        window.addEventListener("resize", handleResize)

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const closeMenu = () => {
        if (isIconClicked) {
            handleIconClicked(false);
        }
    };

    let imageSize

    if (windowWidth < 450) {
        imageSize = "sm"
    } else if (windowWidth < 776) {
        imageSize = "2sm"
    } else {
        imageSize = "lg"
    }

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
                                <Link key={link.href} href={link.href} onClick={closeMenu}>
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
                <FontAwesomeIcon icon={isIconClicked ? faTimes : faBars} size={imageSize} />
            </div>
        </header>
    )
}
