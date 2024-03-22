import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return(
        <>
            <h1>Erro 404</h1>
            <Link to="/">Retornar para home</Link>
        </>
    )
}