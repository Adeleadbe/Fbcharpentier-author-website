"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { submitFormData } from "./SubmitFormData"
import styles from "./ContactForm.module.css"
import DOMPurify from "dompurify"

const schema = yup.object().shape({
    lastName: yup.string().max(25, "Le prénom ne doit pas dépasser 25 caractères").min(2, "Le prénom doit contenir au moins 2 caractères").required("Le prénom est requis"),
    email: yup.string().email("Entrez une adresse email valide").required("L'email est requis"),
    message: yup.string().max(400, "Le message ne doit pas dépasser 400 caractères").required("Le message est requis"),
})

const isKeywordPresent = (data) => {
    const forbiddenKeywords = ["mot1", "mot2", "mot3"] // Ajoutez ici vos mots-clés indésirables
    for (const keyword of forbiddenKeywords) {
        if (data.includes(keyword)) {
            return true
        }
    }
    return false
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const [messageLength, setMessageLength] = useState(0)
    const [validationMessage, setValidationMessage] = useState("")

    const handleMessageChange = (e) => {
        setMessageLength(e.target.value.length)
    }

    const onSubmit = async (data) => {
        try {
            // Filtrage des Mots-Clés
            if (isKeywordPresent(data.lastName) || isKeywordPresent(data.email) || isKeywordPresent(data.message)) {
                console.log("Contenu non autorisé détecté.")
                // Gérer l'erreur ou afficher un message à l'utilisateur
                return
            }

            // Clean the data before sending it to the API to prevent XSS attacks
            const sanitizedData = {
                lastName: DOMPurify.sanitize(data.lastName),
                email: DOMPurify.sanitize(data.email),
                message: DOMPurify.sanitize(data.message),
            }

            setValidationMessage("Formulaire envoyé avec succès !")

            setMessageLength(0);

            await submitFormData(sanitizedData)

            reset()

            setTimeout(() => {
                setValidationMessage("")
            }, 2000)
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire:", error)
            // Gérer les erreurs liées à la requête ici
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="lastName" className={styles.input_field} placeholder="Prénom" {...register("lastName", { maxLength: 25 })} autoComplete="given-name" />
            <p>{errors.lastName?.message}</p>

            <input type="text" id="email" className={styles.input_field} placeholder="Email" {...register("email")} autoComplete="email" />
            <p>{errors.email?.message}</p>

            <div className={styles.form_message}>
                <textarea id="message" className={styles.input_field_message} placeholder="Message" {...register("message")} onChange={handleMessageChange} autoComplete="off" />
                <p className={styles.character_count}>
                    {errors.message?.message} {messageLength}/400 caractères
                </p>
            </div>

            {validationMessage && <p className={styles.validation_message}>{validationMessage}</p>}

            <button className={styles.input_field_button} type="submit">
                Envoyer
            </button>
        </form>
    )
}

export default ContactForm
