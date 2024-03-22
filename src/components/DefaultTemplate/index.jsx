import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

//esse template é o padrão das páginas, o uso da prop "children" é o equivalente ao conteúdo que será
//envolvido por esse componente