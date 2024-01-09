import styles from "./ButtonHomePage.module.css"
import { lora }from "../../fonts"

export default function Button({ url, text }) {
    return (
        <div className={lora.className}>
            <a href={url} rel="noopener noreferrer" className={styles.button}>
                {text}
            </a>
        </div>
    )
}
