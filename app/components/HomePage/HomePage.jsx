"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import styles from "./home-page.module.css"
import { VideoComponent } from "./VideoComponent"
import Image from "next/image"

export default function HomePage() {
    const textRef = useRef(null)

    useEffect(() => {
        const text = textRef.current
        const letters = Array.from(text.textContent)

        // Wrap each letter in a span
        const wrappedText = letters.map((letter, index) => `<span key=${index}>${letter}</span>`).join("")
        text.innerHTML = wrappedText

        // Anime.js animation
        anime
            .timeline({ loop: false })
            .add({
                targets: text,
                opacity: [0, 1],
                easing: "easeOutQuad",
                duration: 500,
                delay: 100, // Ajoute un court délai avant le début de l'échelle
            })
            .add({
                targets: text.querySelectorAll("span"),
                scale: [0.7, 1], // Animation d'échelle de 0.7 à 1
                opacity: [0, 1],
                translateX: [20, 0], // Ajout d'un déplacement horizontal
                color: ["#4DBD4B", "#ffffff"], // Changement de couleur
                easing: "easeOutQuad",
                duration: 1300,
                delay: (el, i) => i * 50,
            })
    }, [])

    return (
        <main className={styles.container}>
            <div className={styles.container_content}>
                {/* <Image  src="/images/predas_without_author.png" alt="Titre du livre" width={345} height={177} /> */}
                <h1 ref={textRef} className={styles.textContainer}>
                    Venez découvrir un univers d’une beauté époustouflante
                </h1>
            </div>
            <VideoComponent />
        </main>
    )
}
