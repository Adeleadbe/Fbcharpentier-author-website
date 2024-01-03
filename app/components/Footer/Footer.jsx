import styles from './Footer.module.css'

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2023 Nom de lécrivain. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };