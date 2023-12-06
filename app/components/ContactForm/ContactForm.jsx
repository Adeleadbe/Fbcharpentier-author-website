"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { submitFormData } from "./SubmitFormData"

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
      // Appeler la fonction qui gère l'envoi des données à l'API
      await submitFormData(data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      // Gérer les erreurs liées à la requête ici
    }
  };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="lastName">Prénom</label>
            <input type="text" id="lastName" placeholder="Prénom" {...register("lastName")} autoComplete="given-name" />
            <p>{errors.lastName?.message}</p>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" {...register("email")} autoComplete="email" />
            <p>{errors.email?.message}</p>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" {...register("message")} autoComplete="off" />
            <p>{errors.message?.message}</p>

            <button type="submit">Envoyer</button>
        </form>
    )
}

export default ContactForm
