"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"
import Image from "next/image"

const ImageAnimation = ({ src, alt, width, height, delay }) => {
    const imageRef = useRef(null)

    useEffect(() => {
        const image = imageRef.current

        // Utilisez anime.js pour animer l'opacité de 0 à 1 après le délai
        anime({
            targets: image,
            opacity: 1,
            duration: 2000,
            easing: "easeOutSine",
            delay: delay,
        })
    }, [delay])

    return (
        <div ref={imageRef} className="image_animation" style={{ opacity: 0 }}>
            <Image src={src} alt={alt} width={width} height={height} quality={100} />
        </div>
    )
}

export default ImageAnimation
