"use client"

import Link from "next/link"
import styles from "./not-found.module.css"
import { lora } from "./fonts"

export default function NotFound() {
    return (
        <div className={styles.global}>
            <div className={lora.className}>
                <h2 className={styles.title}>404</h2>
                <p className={styles.description}>Page introuvable</p>
            </div>
            <Link href="/" className={styles.link}>
                Retour à la page d&apos;accueil
            </Link>
        </div>
    )
}
