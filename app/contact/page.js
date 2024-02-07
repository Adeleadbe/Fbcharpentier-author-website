import styles from "./page.module.css"
import ContactForm from "../components/ContactForm/ContactForm"
import { lora } from "../fonts"
import { Footer } from "../components/Footer/Footer"

export default function Contact() {
    return (
        <>
            <div className={styles.contact}>
                <main className={styles.contact_page}>
                    <div className={lora.className}>
                        <div className={styles.contact_content}>
                            <h1>Me contacter</h1>
                            <p className={styles.contact_content_p}>N’hésitez pas à me contacter si vous avez la moindre question. Je serai ravie de vous répondre. </p>
                            <div className={styles.contact_form}>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
