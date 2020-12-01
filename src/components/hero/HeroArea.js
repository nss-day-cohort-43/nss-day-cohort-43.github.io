import './HeroArea.scss'
import Polygons from './Polygons.svg'

export const HeroArea = () => {
  return (
    <div id="hero" style={{ backgroundImage: `url(${Polygons})` }}>
      <h2>Nashville Software School</h2>
          <h1 className="masthead-heading text-uppercase mb-0">Cohort 43</h1>
          
    </div>
    // <img style={{ backgroundImage: `url(${Polygons})` }}></img>
  )
}