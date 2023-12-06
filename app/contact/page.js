import styles from "./page.module.css"
import ContactForm from "../components/ContactForm/ContactForm"
import { lora } from "../fonts"

export default function Contact() {
    return (
        <div className={lora.className}>
            <main className={styles.contact}>
                <h1>Me contacter</h1>
                <p>N’hésitez pas à me contacter si vous avez la moindre question ou si vous souhaitez et dolore magna aliqua. Lorem ipsum detur </p>
                <div className={styles.contact_form}>
                    <ContactForm />
                </div>
            </main>
        </div>
    )
}
