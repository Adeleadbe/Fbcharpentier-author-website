export const submitFormData = async (data) => {
  try {
      const response = await fetch("/api/contactApi", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      })

      if (response.ok) {
          console.log("Envoi réussi !")
          console.log(data)
      } else {
          console.error("Erreur lors de l'envoi du formulaire")
          const errorMessage = await response.json() // obtenir le message d'erreur du serveur
          console.error(errorMessage)
      }
  } catch (error) {
      console.error("Erreur lors de la requête HTTP:", error)
      // Gérer les erreurs liées à la requête ici
  }
}