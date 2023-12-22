"use client"

import styles from "./home-page.module.css"
import { VideoComponent } from "./VideoComponent"
import Image from "next/image"
import titleHomePage from "../../../public/images/title_homepage.png"

export default function HomePage() {
    return (
        <main className={styles.container}>
            <div className={styles.container_content}>
                <Image src={titleHomePage} alt="Ligne décorative" fill sizes="100vw" className={styles.animatedImage}/>
            </div>
            <VideoComponent />
        </main>
    )
}
