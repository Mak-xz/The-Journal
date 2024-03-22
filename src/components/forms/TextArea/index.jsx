import { forwardRef } from "react"
import styles from "./style.module.scss";

export const Textarea = forwardRef(({ error, ...rest }, ref) => {
    return (
        <div className={styles.fieldBox}>
            <textarea ref={ref} {...rest} />
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    )
})

// um componente muito parecido com o o select, só mudando a tag input por uma textarea