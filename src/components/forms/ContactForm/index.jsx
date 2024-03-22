import { useForm } from "react-hook-form";  // importando o "useForm", pra facilitar o uso do formulário
import { Input } from "../Input";   //importando o API e em "services" e o resto dos componentes
import { Select } from "../Select";
import { Textarea } from "../TextArea";
import { zodResolver } from "@hookform/resolvers/zod";    
import { contactFormSchema } from "./contactFormShema"; 
import { useState } from "react";
import { contactApi } from "../../../services/api";

export const ContactForm = () => {
    const [loading, setLoading] = useState(false);  //constante par fazer um carregamento inicialemente false
    const {
        register, 
        handleSubmit,
        formState: { errors },   // principal variável com os procedimentos do formulário
        reset,
    } = useForm({
        resolver: zodResolver(contactFormSchema),
    });

    const sendEmail = async (formData) => {
        try {
            setLoading(true);
            await contactApi.post("/emails", formData);
            alert("E-mail enviado com sucesso"); //variável que envia email, usando o ".post", para adicionar ao formData              
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const submit = (formData) => {
        sendEmail(formData);                    // variável responsável por enviar o formulário
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type="text"
                placeholder="Nome"
                {...register("name")}
                error={errors.name}
                disabled={loading}
            />
            <Input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <Select
                {...register("departament")}
                error={errors.departament}
                disabled={loading}
            >
                <option value="">Selecione um departamento</option>
                <option value="redacao">Redação</option>
                <option value="administrativo">Administrativo</option>
            </Select>
            <Textarea
                placeholder="Mensagem"
                {...register("message")}
                error={errors.message}
                disabled={loading}
            />
            <button className="btn" type="submit" disabled={loading}>
                {loading ? "Enviando" : "Enviar mensagem"}
            </button>
        </form>
    );
};

// os componentes recebem as props por aqui, o register e outros recursos ajudam