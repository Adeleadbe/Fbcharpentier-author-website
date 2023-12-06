"use client"

import styles from "./ParticleAnimation.module.css"
import { useEffect } from "react"
import anime from "animejs"

const ParticleAnimation = () => {
    useEffect(() => {
        const numParticles = 170 // Nombre de particules
        // Crée un conteneur pour les particules
        const particleContainer = document.createElement("div")
        particleContainer.className = styles["particle-container"] // Utilisez le style importé
        document.body.appendChild(particleContainer)

        const startAnimation = () => {
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement("div")
                particle.className = styles.particle // Utilisez le style importé
                particleContainer.appendChild(particle)

                const size = anime.random(5, 25)
                // Positionne chaque particule de manière aléatoire sur la page
                const x = anime.random(0, window.innerWidth)
                const y = anime.random(0, document.documentElement.scrollHeight)

                particle.style.left = `${x}px`
                particle.style.top = `${y}px`
                particle.style.width = `${size}px`
                particle.style.height = `${size}px`

                // Anime chaque particule
                anime({
                    targets: particle,
                    opacity: [0, 1, 0],
                    duration: anime.random(3000, 8000),
                    easing: "easeInOutSine",
                    delay: anime.random(0, 5000),
                    loop: true,
                })

                // Ajoute une animation de déplacement aléatoire
                const randomDuration = anime.random(5000, 10000) // Durée de l'animation
                anime({
                    targets: particle,
                    translateX: anime.random(-20, 20) + "px", // Déplacement horizontal aléatoire
                    translateY: anime.random(-20, 20) + "px", // Déplacement vertical aléatoire
                    duration: randomDuration,
                    easing: "linear",
                    direction: "alternate", // Pour revenir en arrière après l'animation
                    loop: true,
                })
            }
        }

        startAnimation() // Démarrer l'animation dès le chargement de la page

        // Nettoyer les particules lorsque le composant est démonté
        return () => {
            document.body.removeChild(particleContainer)
        }
    }, [])

    return null
}

export default ParticleAnimation
