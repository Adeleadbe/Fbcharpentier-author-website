import styles from "./Footer.module.css"
import { lora } from "../../fonts"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={lora.className}>
                <div className={styles.container}>
                    <p>&copy; 2023 F.B Charpentier. Tous droits réservés. – Mentions légales – Politique de confidentialité </p>
                </div>
            </div>
        </footer>
    )
}
