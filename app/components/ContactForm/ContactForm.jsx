"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { submitFormData } from "./SubmitFormData"
import styles from "./ContactForm.module.css"
import DOMPurify from "dompurify";

const schema = yup.object().shape({
    lastName: yup.string().required("Le prénom est requis"),
    email: yup.string().email("Entrez une adresse email valide").required("L'email est requis"),
    message: yup.string().required("Le message est requis"),
})

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

     const onSubmit = async (data) => {
    try {
      // Clean the data before sending it to the API to prevent XSS attacks
            const sanitizedData = {
                lastName: DOMPurify.sanitize(data.lastName),
                email: DOMPurify.sanitize(data.email),
                message: DOMPurify.sanitize(data.message),
            };

            await submitFormData(sanitizedData);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      // Gérer les erreurs liées à la requête ici
    }
  };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="lastName" className={styles.input_field} placeholder="Prénom" {...register("lastName")} autoComplete="given-name" />
            <p>{errors.lastName?.message}</p>

            <input type="text" id="email" className={styles.input_field} placeholder="Email" {...register("email")} autoComplete="email" />
            <p>{errors.email?.message}</p>

            <textarea id="message" className={styles.input_field_message} placeholder="Message" {...register("message")} autoComplete="off" />
            <p>{errors.message?.message}</p>

            <button className={styles.input_field_button} type="submit">Envoyer</button>
        </form>
    )
}

export default ContactForm
