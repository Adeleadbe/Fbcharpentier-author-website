"use client"

import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import styles from "./BookContent.module.css"
import Button from "../CommonComponents/ButtonBook"
import Image from "next/image"
import TextAnimation from "./TextAnimation"
import ImageAnimation from "./ImageAnimation"
import backgroundLine from "../../../public/images/background_line.svg"
import predasTitle from "../../../public/images/predas_title.png"
import coverPredas from "../../../public/images/book_predas.png"
import hoverAnimation from "./HoverAnimation"
import backgroundCircle from "../../../public/images/background_circle.svg"
import { Footer } from "../Footer/Footer"

export default function BookContent({ detail, links, reviews }) {
    const coverRef = useRef(null)

    const hoverCover = hoverAnimation(coverRef, {
        x: 10,
        y: -10,
        z: 5,
    })

    const imageHover = hoverAnimation(coverRef, {
        x: 15,
        y: -5,
        z: 11,
    })
    // const coverRef = useRef(null)
    // const [animationPlayed, setAnimationPlayed] = useState(false)

    // useEffect(() => {
    //     const coverAnimation = anime({
    //         targets: coverRef.current,
    //         translateX: ["100%", 0],
    //         easing: "easeInOutQuad",
    //         opacity: [0, 1],
    //         duration: 1000,
    //         delay: 100,
    //         autoplay: false,
    //     })

    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY
    //         const windowHeight = window.innerHeight
    //         const triggerPosition = coverRef.current.getBoundingClientRect().top + scrollPosition - windowHeight / 2

    //         if (scrollPosition > triggerPosition && !animationPlayed) {
    //             coverAnimation.play()
    //             setAnimationPlayed(true)
    //         }
    //     }

    //     window.addEventListener("scroll", handleScroll)

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [animationPlayed])

    return (
        <>
            <div className={styles.main_background}></div>
            <div className={styles.main_content}>
                <ImageAnimation src={predasTitle} alt="Titre de la couverture du livre" width={275} height={191} quality={100} delay={100} />
                <TextAnimation text={detail.summary_first_paragraph} delay={1500} />
                <TextAnimation text={detail.summary_second_paragraph} delay={3000} />
                <TextAnimation text={detail.summary_third_paragraph} delay={4500} />
                <TextAnimation text={detail.summary_fourth_paragraph} delay={6000} />
            </div>

            <div className={styles.svg_container_line}>
                <Image src={backgroundLine} alt="Ligne décorative" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.aside_background}></div>
            <aside className={styles.aside} ref={coverRef}>
                <div className={styles.aside_content}>
                    <div className={styles.aside_content_order}>
                        <p>Je commande : </p>
                        <div className={styles.aside_content_order_button}>
                            {links.map((link, index) => (
                                <Button key={index} text={link.text} url={link.url} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.aside_content_review}>
                        <p>Partagez votre avis : </p>
                        <div className={styles.aside_content_review_button}>
                            {reviews.map((review, index) => (
                                <Button key={index} text={review.text} url={review.url} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.aside_content_picture}>
                    <div className={styles.aside_picture} style={{transform: hoverCover.transform}}>
                        <Image
                            src={backgroundCircle}
                            alt="Background Circle"
                            width={440} height={440} sizes="100vw" quality={100}
                        />
                        <Image src={coverPredas} alt="Couverture du livre" width={440} height={635} sizes="100vw" quality={100} style={{transform: imageHover.transform }} />
                    </div>
                    <div className={styles.aside_section_note}>
                        <p>{detail.authorNote}</p>
                    </div>
                </div>
            </aside>
        </>
    )
}
