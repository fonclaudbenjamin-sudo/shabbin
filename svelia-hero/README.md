# SVELIA – Hero gradient

Fond animé WebGL (ShaderGradient) aux couleurs SVELIA pour la section d'accueil.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # bundle de production dans dist/
```

- Composant réutilisable : `src/components/GradientBackground.tsx`
  (props `colors`, `speed`, `gradient` pour tout réglage ShaderGradient).
- Démo de la hero : `src/App.tsx`.
- Aperçus : `docs/hero-desktop.png`, `docs/hero-mobile.png`.

Poids : ~356 Ko gzip (three.js inclus).
