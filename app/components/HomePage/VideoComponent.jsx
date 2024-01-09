import styles from "./video-component.module.css"

export const VideoComponent = () => {
    return (
            <video autoPlay loop muted className={styles.video_element}>
                <source src="/videos/forest.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
    )
}
