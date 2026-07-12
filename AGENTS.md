## Workflow éditorial — RÈGLE ABSOLUE

Toute nouvelle publication (article de blog OU nouvelle page, quelle qu'elle soit) passe par
3 étapes de validation par Laura. **Ne jamais sauter une étape, ne jamais publier sans
validation explicite de Laura à l'étape 3.**

1. **SUJET** — proposer titre + angle. Attendre que Laura valide le sujet.
2. **PLAN Hn SEO** — proposer la structure H1/H2/H3 + les mots-clés cibles + l'intention de
   recherche. Attendre que Laura valide le plan.
3. **CONTENU** — rédiger l'article/la page en entier. Attendre que Laura valide le contenu.
4. **PUBLICATION** — seulement après la validation de l'étape 3 : créer le `.md` dans
   `src/content/blog/` (ou la page `.astro`), lancer le build, vérifier.

Le suivi de chaque contenu en cours se tient dans `veille/pipeline.json` (statuts :
`idee` → `sujet_valide` → `plan_valide` → `contenu_valide` → `publie`).

## Veille éditoriale

Sources dans `veille/sources.json` (thèmes complémentaires : SEO, GEO, LLM, IA, Agents IA).
Deux canaux : `web` (blogs/RSS officiels, lisibles via WebFetch/WebSearch sans extension) et
`linkedin` (nécessite l'extension Claude in Chrome connectée + session LinkedIn active).
La veille propose des sujets ; elle ne déclenche jamais de rédaction seule (voir workflow
ci-dessus). Le dossier `veille/` est privé (gitignore).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
