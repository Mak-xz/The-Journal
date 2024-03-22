import { forwardRef } from "react"
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, ...rest }, ref) => {
    return (
        <div className={styles.fieldBox}>
            <input ref={ref} {...rest} />
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    )
})

//o input usa o "forWardRef" para receber um componente como parâmetro ( no caso ref) , usa o rest na tag 
// input pra facilitar o uso de props, e tem um tenário para ativar a mensagem de erro