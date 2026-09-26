import { GradientBackground } from './components/GradientBackground'
import './App.css'

function App() {
  return (
    <GradientBackground className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Legging 3D sculptant</p>
        <h1 className="hero__title">
          L’élégance,
          <br />
          en mouvement.
        </h1>
        <p className="hero__text">
          Texture 3D qui lisse visuellement la peau d’orange, taille haute gainante, 13 coloris.
        </p>
        <a className="hero__cta" href="https://svelia.store/products/legging-sculptant-et-lissant">
          Découvrir le legging
        </a>
      </div>
    </GradientBackground>
  )
}

export default App
