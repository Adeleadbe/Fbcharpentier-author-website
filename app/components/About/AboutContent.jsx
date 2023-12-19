import Image from "next/image"
import styles from "./about_content.module.css"
import { lora, cookie } from "../../fonts"

export default function AboutContent() {
    return (
        <div className={lora.className}>
            <div className={styles.nav_cross}></div>
             <div className={styles.svg_container_author}>
                <Image src="/images/background_author_line.png" alt="Ligne décorative" width={470} height={402} className={styles.svg_container_author_line} sizes='100vw'/>
            </div> 
            <section className={styles.author_presentation}>
                <div className={styles.author_presentation_image}>
                    <Image src="/images/author_fbcharpentier.png" alt="Photo de l'autrice F.B Chapentier" width={500} height={507} quality={100} className={styles.author_presentation_image_picture} />
                </div>
                <div className={styles.author_presentation_information}>
                    <h2 className={cookie.className}>F.B Charpentier</h2>
                    <div className={styles.title_underline}>
                        <Image src="/images/underline_title.png" alt="Ligne décorative" width={400} height={23} quality={100} />
                    </div>
                    <h3 className={cookie.className}>Autrice passionnée et légèrement tête en l&rsquo;air</h3>
                    <div className={styles.author_presentation_text}>
                        <p>Je m’appelle Fabienne, Albine. J’aime à mélanger mes deux premiers prénoms pour n’en faire qu’un, Falbine.</p>
                        <p>Je vis en Bourgogne, dans une très belle région</p>
                        <p>Je suis passionnée par la transmission de tout ce qui me ravit ; me fait vibrer dans la vie, et par toute la beauté qui m’entoure, que je partage</p>
                        <p>Je revisite d’anciens contes. J’écris des poèmes, et je viens de publier deux romans d’aventure-fantaisy.</p>
                        <p>Le premier, PRËDAS ou Praidas (qui est l’anagramme de paradis — et de cela, je m’en suis aperçue récemment !), est un roman pour adolescents.</p>
                        <p>Le deuxième, PARADIS, est la suite, mais cette fois-ci dans la catégorie adulte.</p>
                        <p>Je compose aussi des chansons, sur des mélodies de valses et de mazurka, qui se dansent lors de petits bals folk.</p>
                        <p>Et tout cela, parce que j’aime écrire et propager le bonheur !</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
