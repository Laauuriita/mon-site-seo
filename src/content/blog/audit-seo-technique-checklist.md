---
title: "Audit SEO technique : les 7 vérifications que je fais avant toute stratégie de contenu"
description: "Avant d'écrire la moindre ligne de contenu, un site doit être techniquement sain. Ma checklist terrain en 7 points : crawl, indexation, vitesse, structure, données structurées, hreflang et logs."
pubDate: 2026-06-20
category: "SEO Technique"
categorySlug: "seo-technique"
emoji: "🔧"
readTime: 8
author: "Laura"
tags: ["seo technique", "audit", "crawl", "indexation", "core web vitals"]
---

On me demande souvent par où commencer un audit SEO. Ma réponse ne change pas : **par la technique, toujours.** Publier du contenu sur un site que Google crawle mal, c'est remplir un seau percé. Voici les 7 vérifications que je fais systématiquement, dans cet ordre, avant de parler stratégie éditoriale.

## 1. Le site est-il crawlable ?

Premier réflexe : lancer un crawl complet avec Screaming Frog et le comparer à ce que le site *devrait* contenir.

Ce que je cherche :

- des **pages orphelines** (présentes dans le sitemap mais reliées à rien) ;
- des **chaînes de redirections** (301 → 301 → 200) qui diluent le signal ;
- des **pages bloquées par le robots.txt** qui ne devraient pas l'être — et l'inverse ;
- une **profondeur de clic** excessive : au-delà de 3-4 clics depuis l'accueil, une page devient invisible.

Un point souvent négligé en 2026 : vérifier aussi les user-agents IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`). Un blocage involontaire dans le robots.txt vous sort des réponses de ChatGPT et Perplexity.

## 2. Qu'est-ce qui est réellement indexé ?

Le crawl dit ce qui est *accessible* ; la Search Console dit ce qui est *indexé*. L'écart entre les deux est une mine d'informations.

Dans le rapport « Pages », je regarde les motifs d'exclusion : « Détectée, actuellement non indexée » signale souvent un problème de qualité ou de budget de crawl ; « En double, Google a choisi une autre page canonique » révèle des contenus trop proches ou des canonicals mal posées. Un site sain a un ratio pages indexées / pages crawlables proche de 1 pour ses pages stratégiques.

## 3. Les Core Web Vitals tiennent-ils la route ?

Je vérifie les données terrain (CrUX) plutôt que les scores labo, car ce sont elles que Google utilise :

- **LCP** < 2,5 s — le plus souvent plombé par une image héro non optimisée ;
- **INP** < 200 ms — attention au JavaScript tiers (chat, analytics, tag managers empilés) ;
- **CLS** < 0,1 — réservez l'espace des images et des publicités.

Sur les sites Astro ou statiques que je construis, ces seuils sont presque gratuits. Sur un WordPress chargé de plugins, c'est souvent le chantier n°1.

## 4. La structure HTML raconte-t-elle la bonne histoire ?

Un H1 unique et descriptif, des H2/H3 qui reflètent la hiérarchie réelle du contenu, des title uniques de moins de 60 caractères, des meta descriptions qui donnent envie de cliquer. C'est élémentaire, et pourtant : sur la majorité des audits que je mène, **plus de 20 % des pages ont un title dupliqué ou vide.**

Depuis l'essor des moteurs IA, la structure a pris encore plus d'importance : un modèle de langage s'appuie fortement sur les balises de titre pour comprendre et extraire vos contenus.

## 5. Les données structurées sont-elles présentes et valides ?

Schema.org n'est pas décoratif. `Article`, `Person`, `Organization`, `BreadcrumbList`, `FAQPage` : ces balisages nourrissent les résultats enrichis de Google *et* la compréhension de votre entité par les moteurs IA.

Je valide chaque gabarit de page avec l'outil de test des résultats enrichis, et je vérifie surtout la **cohérence** : le même nom d'auteur, la même organisation, les mêmes URL de profils sociaux partout.

## 6. Le multilingue est-il propre ? (hreflang)

Point sensible au Québec, où les sites jonglent entre `fr-CA` et `en-CA`. Les erreurs classiques :

- hreflang déclaré sans **balise retour** (A pointe vers B, mais B ne pointe pas vers A) ;
- attribut `lang` de la page incohérent avec le hreflang déclaré ;
- contenu anglais résiduel sur des pages déclarées francophones — un problème que je rencontre si souvent que j'ai fini par créer un outil dédié pour le détecter dans les exports Screaming Frog.

## 7. Que disent les logs serveur ?

C'est la vérification que presque personne ne fait, et c'est pourtant la seule qui montre le comportement **réel** de Googlebot : quelles pages il visite, à quelle fréquence, et lesquelles il ignore. Sur un gros site, l'analyse de logs révèle presque toujours que 20 % des URL consomment 80 % du budget de crawl — souvent des pages de filtres, de pagination ou de paramètres sans aucune valeur SEO.

Bonus 2026 : les logs montrent aussi le passage des crawlers IA. Si `ClaudeBot` et `PerplexityBot` visitent régulièrement vos pages clés, votre visibilité GEO est en construction.

## L'ordre compte

Cette checklist va du plus bloquant au plus fin. Inutile d'optimiser des données structurées si Google n'arrive pas à crawler le site ; inutile d'analyser des logs si l'indexation de base est cassée. **Un audit technique n'est pas une liste de 300 points Screaming Frog : c'est un diagnostic hiérarchisé**, qui débouche sur 5 à 10 actions classées par impact. Le reste, c'est du bruit.
