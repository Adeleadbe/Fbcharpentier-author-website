import BookContent from "../components/Book/BookContent"
import styles from "./page.module.css"
import ParticleAnimation from "../components/Book/ParticleAnimation"
import { Footer } from "../components/Footer/Footer"

export default function Book() {
    const bookDetails = {
        heroSection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        summary_first_paragraph: "Arthur, un adolescent de treize ans, orphelin, cherche à découvrir l’identité de ses parents.",
        summary_second_paragraph: "Trop de mystères entourent sa naissance et trop de questions restent sans réponse.",
        summary_third_paragraph:
            "Muni d’un disque d’or pour tout héritage et aidé de ses trois amis, il part à la conquête d’une terre nouvelle nommée Prëdas. Ensemble, ils découvriront un univers parallèle incroyable, d’une beauté époustouflante, mais un paradis en danger ; un monde où même les êtres les plus intelligents et les plus pacifiques peuvent être dupes des apparences.",
        summary_fourth_paragraph: "Cette quête conduira les adolescents à affronter un terrible conflit qui menace Prëdas de basculer dans la guerre.",
        authorNote: "J’ai passé un merveilleux moment à décrire le quotidien et les aventures des quatre amis, Théophile, Arthur, Ambre et Jérémie sur leur terre ainsi que sur Astrhäle",
    }

    const bookLinks = [
        { text: "Amazon", url: "https://www.amazon.fr/Pr%C3%ABdas-F-B-Charpentier/dp/B08YDKLNT1/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" },
        { text: "Fnac", url: "https://www.fnac.com/a15685439/F-B-Charpentier-Predas" },
        { text: "Cultura", url: "https://www.cultura.com/p-predas-3507848.html" },
    ]

    const bookReviews = [
        { text: "Booknode", url: "" },
        { text: "Goodreads", url: "" },
    ]

    return (
        <>
            <main className={styles.main_book}>
                <div className={styles.main_background}></div>
                <ParticleAnimation />
                <div className={styles.book_content_wrapper}>
                    <BookContent detail={bookDetails} links={bookLinks} reviews={bookReviews} />
                </div>
            </main>
            <Footer />
        </>
    )
}
