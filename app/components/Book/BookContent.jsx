import styles from "./BookContent.module.css"
import Button from "../CommonComponents/Button"
import Image from "next/image"
import TextAnimation from "./TextAnimation"
import ImageAnimation from "./ImageAnimation"

export default function BookContent({ detail, links, reviews, cover }) {
    return (
        <>
            <div className={styles.main_background}></div>
            <div className={styles.main_content}>
                <ImageAnimation src={detail.img} alt="Titre de la couverture du livre" width={275} height={191} quality={100} delay={500} />
                <TextAnimation text={detail.heroSection} delay={3000} />
                <TextAnimation text={detail.summary_first_paragraph} delay={5500} />
                <TextAnimation text={detail.summary_second_paragraph} delay={8000} />
                <TextAnimation text={detail.summary_third_paragraph} delay={10500} />
                <TextAnimation text={detail.summary_fourth_paragraph} delay={13000} />
                <TextAnimation text={detail.authorNote} delay={15500} />
            </div>

            <div className={styles.svg_container_line}>
                <Image src="/images/background_line.svg" alt="Ligne décorative" width={1525} height={400} />
            </div>

            <div className={styles.aside_background}></div>
            <aside className={styles.aside}>
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
                        <p>N’hésitez pas à partagez votre avis : </p>
                        <div className={styles.aside_content_review_button}>
                        {reviews.map((review, index) => (
                            <Button key={index} text={review.text} url={review.url} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className={styles.svg_container_circle}>
                    <Image src="/images/background_circle.svg" alt="Rond décoratif" width={380} height={380} />
                </div>
                <div className={styles.aside_picture}>
                    <Image src={cover.url} alt="Couverture du livre" width={370} height={550} quality={100} />
                </div>
            </aside>
        </>
    )
}
