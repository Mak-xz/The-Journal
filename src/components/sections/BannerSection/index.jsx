import styles from "./index.module.scss"

export const BannerSection = ({img, alt}) => {
    return(
        <section className={styles.BannerContainer} >
            <img src={img} alt={alt} />
        </section>
    )
}

// um banner simples com uma imagem