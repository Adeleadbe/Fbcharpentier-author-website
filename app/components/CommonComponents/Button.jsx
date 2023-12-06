import styles from './button.module.css'

export default function Button({ url, text }) {
    return (
        <a href={url} rel="noopener noreferrer" className={styles.button}>
            {text}
        </a>
    )
}