import Image from "next/image"
import styles from "./about_content.module.css"
import { lora, cookie } from "../../fonts"

export default function AboutContent() {
    return (
        <div className={lora.className}>
            <section className={styles.author_presentation}>
                <div className={styles.author_presentation_image}>
                    <div className={styles.svg_container_author_line}>
                        <Image src="/images/background_author_line.svg" alt="Ligne décorative" width={680} height={850} />
                    </div>
                    <Image src="/images/author_fbcharpentier.png" alt="Autrice F.B Chapentier" width={500} height={507} quality={100} />
                </div>
                <div className={styles.author_presentation_information}>
                    <h2 className={cookie.className}>F.B Charpentier</h2>
                    <div className={styles.title_underline}>
                        <Image src="/images/underline_title.png" alt="Ligne décorative" width={400} height={23} quality={100} />
                    </div>
                    <h3 className={cookie.className}>Autrice passionnée et légèrement tête en l&rsquo;air</h3>
                    <div className={styles.author_presentation_text}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmo
                        </p>
                        <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                            dolor sit amet, consectetur
                        </p>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                            dolor sit amet, consectetur
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
