# Documentation de Projet : My Jewellery (Site Vitrine)

**Étudiant :** Matteo Gras
**Formation :** BTS SIO Option SLAM (Promotion 2026)
**Type de Projet :** Projet d'intégration Web (Projet SAM)
**Date :** Décembre 2024

---

## 1. Contexte et Objectifs du Projet
Dans le cadre de mon apprentissage du développement web frontend, j'ai réalisé la conception et l'intégration complète d'un site vitrine statique : "My Jewellery".
Le projet consistait à imaginer une boutique artisanale de bijoux (colliers, bagues, bracelets) et à lui fournir une vitrine numérique attractive. L'objectif principal était de concevoir un catalogue organisé, fluide et visuellement premium, sans faire appel à des outils tiers complexes, afin de prouver ma maîtrise brute de l'intégration web.

## 2. Architecture et Choix Techniques
Pour mettre l'accent sur la performance d'affichage et l'indépendance technologique, ce projet repose sur une approche "Vanilla" stricte :

*   **HTML5 Sémantique :** Structuration propre du contenu avec l'utilisation de balises de sens (`<header>`, `<section>`, `<footer>`, `<nav>`) garantissant l'accessibilité aux lecteurs d'écran et un référencement naturel (SEO) optimal.
*   **Vanilla CSS3 :** Création d'une feuille de style CSS (`styles.css`) "From Scratch", sans recourir à des frameworks lourds comme Bootstrap.
*   **Mise en page "Responsive" :** Utilisation des standards modernes d'alignement (`Flexbox` et `CSS Grid`) pour adapter dynamiquement l'affichage du catalogue, que l'utilisateur soit sur un smartphone ou un ordinateur de bureau.
*   **Charte Graphique Unifiée :** Adoption de couleurs douces et luxueuses (marron, beige abstrait : `#f3e7df`, `#6b4f4f`) et de polices à empattement (Georgia) rappelant la rigueur et l'ébénisterie artisanale.

## 3. Réalisations Techniques Logicielles

### 3.1. Construction du Catalogue et Galeries (CSS Grid/Flexbox)
Le cœur du site repose sur son catalogue. J'ai divisé l'interface en plusieurs sections métier (Créations, Bijoux, Cadeaux, Promotions). 
Pour garantir une symétrie parfaite des cartes "Produit", j'ai implémenté le module **Flexbox** (et/ou Grid) permettant aux éléments de se répartir automatiquement d'une à plusieurs colonnes en fonction de la taille de l'écran (`justify-content: center; flex-wrap: wrap;`). 
Chaque bijou bénéficie de son propre encart (Card) incluant sa photographie, son titre, son étiquette visuelle positionnée de manière absolue (`position: absolute; transform: translateX(-50%)`) et son bouton d'appel à l'action.

*>> [À FAIRE : Insérer ici une capture d'écran de l'une des grilles de bijoux (ex: Section Promotions)]*

### 3.2. Micro-Interactions et Expérience Utilisateur (UX)
Une interface moderne se doit d'être interactive. J'ai ajouté des animations de transition pures CSS pour vitaliser la navigation au survol de la souris.
*   **Effets Hover (Survol) :** Lorsque l'utilisateur passe la souris sur une carte produit ou un bouton, l'élément s'agrandit légèrement (`transform: scale(1.05)`) et projette une ombre portée amplifiée (`box-shadow`), simulant un effet de profondeur 3D (Z-index visuel).
*   **Ancrage Intra-page :** Le menu de navigation redirige de manière fluide vers les différents ID des sections (`<a href="#creations">`), limitant les rechargements de page inutiles.

*>> [À FAIRE : Insérer ici une capture de l'en-tête (Header) ou d'un bouton mis en exergue]*

## 4. Bilan Personnel et Compétences Couvertes (Grille E5)
Ce projet d'intégration fut indispensable dans mon cursus. Bien qu'il ne nécessite pas de traitement backend (PHP/SQL), la conception rigoureuse du DOM et des feuilles de calcul en cascade est la fondation nécessaire avant l'apprentissage des frameworks complexes (React, Vue, Alpine).

Ce projet répond à plusieurs attentes de la maquette pédagogique du BTS SIO SLAM :
*   **Gérer le Patrimoine Informatique (B1) :** Maintien d'une arborescence de fichiers stricte et claire (dossiers images distincts, séparation claire HTML/CSS) sur le poste de développement.
*   **Développer la présence en ligne (B3) :** Création complète du code source front-end pour une interface commerciale, avec un rendu graphique maîtrisé.
*   **Travailler en mode projet (B4) :** Réponse au besoin "fictif" d'une boutique (cahier des charges stylistique, catégorisation des articles en Collections/Cadeaux/Promos... ) et respect des délais d'intégration.

---
**Conclusion**
Le site "My Jewellery" valide l'acquisition des bases de l'ingénierie web. La maîtrise du trio HTML/CSS/UX me permet aujourd'hui de construire des interfaces front-end plus avancées et d'intégrer des fonctionnalités interactives (JavaScript) ou des données serveur avec aisance.
