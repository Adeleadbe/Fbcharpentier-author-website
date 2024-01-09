"use client"

import styles from "./home-page.module.css"
import { VideoComponent } from "./VideoComponent"
import Image from "next/image"
import titleHomePage from "../../../public/images/title_homepage.png"
import Button from "../CommonComponents/ButtonHomePage"

export default function HomePage() {
    const books = [
        { text: "Prëdas", url: "" },
        { text: "Paradis", url: "" },
    ]
    return (
        <main className={styles.container}>
            <div className={styles.container_content}>
                <div className={styles.container_content_image}>
                    <Image src={titleHomePage} alt="Titre de la page principale" fill sizes="100vw" style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.container_content_button}>
                    {books.map((book, index) => (
                        <Button key={index} text={book.text} url={book.url} />
                    ))}
                </div>
            </div>
            <VideoComponent />
        </main>
    )
}
