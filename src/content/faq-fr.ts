import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Questions fréquentes",
  items: {
    "/jpg-to-pdf": [
      {
        question: "Comment convertir un fichier JPG en PDF ?",
        answer: "Cliquez sur le bouton de sélection ou glissez vos images JPG dans la zone ci-dessus. Choisissez si besoin l'orientation, la taille de page et les marges, puis cliquez sur « Convertir en PDF » et téléchargez le fichier.",
      },
      {
        question: "Comment mettre plusieurs photos dans un seul PDF ?",
        answer: "Ajoutez toutes vos images, puis cochez l'option « Fusionner toutes les images en un seul fichier PDF ». Vos photos JPG sont alors regroupées dans un seul document.",
      },
      {
        question: "Transformer une photo en PDF est-il gratuit ?",
        answer: "Oui. Convertir une photo ou une image JPG en PDF est gratuit, sans inscription ni filigrane. L'outil fonctionne dans votre navigateur, sur ordinateur, Android ou iPhone.",
      },
      {
        question: "Mes fichiers sont-ils en sécurité ?",
        answer: "Oui. Vos fichiers sont transférés via une connexion chiffrée (TLS) et supprimés automatiquement de nos serveurs après le traitement.",
      },
    ],
    "/pdf-to-jpg": [
      {
        question: "Comment convertir un PDF en JPG ?",
        answer: "Sélectionnez votre PDF ou glissez-le dans la zone ci-dessus. Choisissez « Page en JPG » pour transformer chaque page en image, ou « Extraire les images » pour récupérer les images contenues dans le PDF, puis lancez la conversion.",
      },
      {
        question: "Quelle qualité d'image choisir ?",
        answer: "72 DPI convient à l'affichage web, 150 DPI à la plupart des usages, 300 DPI à l'impression et 600 DPI à l'impression professionnelle. Plus la résolution est élevée, plus le fichier JPG est lourd.",
      },
      {
        question: "La conversion de PDF en JPG est-elle gratuite ?",
        answer: "Oui. Elle est gratuite et sans inscription, et fonctionne dans votre navigateur, sans logiciel à installer.",
      },
      {
        question: "Mes fichiers sont-ils en sécurité ?",
        answer: "Oui. Vos fichiers sont transférés via une connexion chiffrée (TLS) et supprimés automatiquement de nos serveurs après le traitement.",
      },
    ],
  },
};
